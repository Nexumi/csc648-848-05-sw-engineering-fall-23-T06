/**
 * This class allows services to be used regarding tracking information on Order Owl
 */

package com.orderowl.api.tracking;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrackingService {

    private final TrackingRepository trackingRepository;

    @Autowired
    public TrackingService(TrackingRepository trackingRepository) {

        this.trackingRepository = trackingRepository;
    }

    /**
     * This will allow us to receive the tracking information in order for the user to see their orders.
     *
     * @return A List of the tracking information
     */
    @Cacheable("tracking")
    public List<Tracking> getTrackingInfo() {

        return trackingRepository.findAll();
    }

    /**
     * This will allow us to recover the tracking ID.
     *
     * @param id This will be the id that is associated with certain tracking orders.
     * @return The Tracking order that is relating to the ID, or null will be returned if nothing is found.
     */
    @Cacheable("tracking")
    public Tracking getTrackingById(Long id) {

        return trackingRepository.findById(id).orElse(null);
    }


    /**
     * Will allow to add new tracking information.
     *
     * @param tracking The tracking information to be added to the list.
     */
    public void addNewTracking(Tracking tracking) {

        trackingRepository.save(tracking);
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
