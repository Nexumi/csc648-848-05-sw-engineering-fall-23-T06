/**
 * This class allows services to be used regarding tracking information on Order Owl
 */

package com.orderowl.api.tracking;


import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.shippo.Shippo;
import com.shippo.exception.APIConnectionException;
import com.shippo.exception.APIException;
import com.shippo.exception.AuthenticationException;
import com.shippo.exception.InvalidRequestException;
import com.shippo.model.Track;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Service
public class TrackingService {

    private final TrackingRepository trackingRepository;

    private final WebClient webClient;

    @Autowired
    public TrackingService(TrackingRepository trackingRepository, WebClient webClient) {

        this.trackingRepository = trackingRepository;
        this.webClient = webClient;
    }

    /**
     * This will allow us to receive the tracking information in order for the user to see their orders.
     *
     * @return A List of the tracking information
     */

    public List<Tracking> getTrackingInfo() {

        return trackingRepository.findAll();
    }

    /**
     * This will allow us to recover the tracking ID.
     *
     * @param id This will be the id that is associated with certain tracking orders.
     * @return The Tracking order that is relating to the ID, or null will be returned if nothing is found.
     */

    public Tracking getTrackingById(Long id) {

        return trackingRepository.findById(id).orElse(null);
    }


    /**
     * Will allow to add new tracking information.
     *
     * @param tracking The tracking information to be added to the list.
     */
    public void addNewTracking(Tracking tracking) {

        try {
            Track track = sendPostToShippo(tracking.getTrackingNumber(), tracking.getCarrier());
            tracking.setAddress(track.getAddressTo().toString());
            tracking.setStatus(track.getTrackingStatus().getStatusDetails().toString());
            tracking.setEta(convertToLocalDateViaInstant(track.getETA()));
            tracking.setLocation(track.getTrackingStatus().getLocation().toString());
            trackingRepository.save(tracking);
        } catch (Exception e) {
            System.out.println("FAILED-------------!!!!");
            e.printStackTrace();
        }


    }

    /**
     * credit : https://www.baeldung.com/java-date-to-localdate-and-localdatetime
     * @param dateToConvert
     * @return
     */
    public LocalDate convertToLocalDateViaInstant(Date dateToConvert) {
        return dateToConvert.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDate();
    }

    public Track sendPostToShippo (String trackingNumber, String carrier) throws APIConnectionException, APIException, AuthenticationException, InvalidRequestException {

        Track track = Track.getTrackingInfo(carrier,trackingNumber, "shippo_test_862c26ec8e4c0e1182343f2bfbc850c8e2c418f0");
        return track;
//        System.out.println(new GsonBuilder().setPrettyPrinting().create().toJson(track));
//        TrackingPayload trackingPayload = new TrackingPayload();
//        trackingPayload.setTracking_number(trackingNumber);
//        trackingPayload.setCarrier(carrier);
//
//        String convertToJson = new Gson().toJson(trackingPayload);
//        webClient.post()
//                .body(BodyInserters.fromValue(convertToJson))
//                .retrieve()
//                .bodyToMono(String.class)
//                .block();
    }

    /**
     * This will make it possible to search for the order by providing text.
     *
     * @param searchText This will be the text that is used to search for the tracking information.
     * @return A List for the tracking information that has been put in before.
     */
    public List<Tracking> searchTracking(String searchText) {

        return trackingRepository.searchTracking(searchText);
    }

    /**
     *  This interacts with the database to find the number of orders left to be delivered
     *
     * @return Returns the count of pending orders
     */
    public Integer getTrackingCount() {

        return trackingRepository.getTrackingCount();
    }

    /**
     * This will allow the user to be able to delete the order by the ID.
     *
     * @param id This will be the ID of the order that needs to be deleted.
     */
    public void deleteById(Long id) {
        trackingRepository.deleteById(id);
    }

//    /**
//     * This will make it possible to delete an order by the tracking number.
//     *
//     * @param trackingNumber This will be the tracking number that is related to the order that needs to be deleted.
//     */
//    public void deleteTrackingByNumber(String trackingNumber) {
//
//        trackingRepository.deleteByTrackingNumber(trackingNumber);
//    }
}
