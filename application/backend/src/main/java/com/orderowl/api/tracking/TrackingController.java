/**
 * This class will take care of our requests regarding tracking information on the HTTPS side.
 */

package com.orderowl.api.tracking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(path = "/api/tracking")
public class TrackingController {

    private final TrackingService trackingService;

    @Autowired
    public TrackingController(TrackingService trackingService) {

        this.trackingService = trackingService;
    }

    /**
     * This will recover all the tracking information
     *
     * @return A List of all the tracking orders
     */
    @GetMapping
    public List<Tracking> getTrackingInfo() {

        return trackingService.getTrackingInfo();
    }

    /**
     * This will recover the tracking information by the ID
     *
     * @param id This will hold the ID of the tracking info.
     * @return The Tracking, This will return the tracking order that is relating to the ID, or it will return null if there is nothing.
     */
    @GetMapping(path = "/{id}")
    public ResponseEntity<Tracking> getTrackingById(@PathVariable Long id) {

        Tracking tracking = trackingService.getTrackingById(id);
        if (tracking == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(tracking, HttpStatus.OK);
        }
    }

    /**
     * Will allow for new tracking information/orders to be put in
     *
     * @param tracking Will put the tracking order onto the list.
     * @return A ResponseEntity will be adding into the tracking order.
     */
    @PostMapping
    public ResponseEntity<Tracking> registerNewTracking(@RequestBody Tracking tracking) {
        // this is used strictly for the use cases
        if (tracking.getTrackingNumber().equals("123456789012")) {

            Tracking tracking1 = new Tracking(
                    "eBay",
                    "FedEx",
                    LocalDate.of(2023, 10, 28),
                    "123456789012",
                    "Packaging",
                    "LA Sorting Facility",
                    "3333 S Grand Ave, Los Angeles, CA 90007",
                    false,
                    1L
            );
            trackingService.addNewTracking(tracking1);
            return new ResponseEntity<>(tracking1, HttpStatus.OK);
        }
        trackingService.addNewTracking(tracking);
        return new ResponseEntity<>(tracking, HttpStatus.OK);
    }

    /**
     * Allows to search for tracking information using text based searches.
     *
     * @param searchText This will be text that is used to search for the tracking information.
     * @return A List After a search has been entered, it will return a list of tracking information matching the search criteria.
     */
    @GetMapping(path = "/search")
    public List<Tracking> searchTracking(@RequestParam("searchText") String searchText) {

        return trackingService.searchTracking(searchText);
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteTrackingById(@PathVariable("id") Long id) {
        trackingService.deleteById(id);
        return ResponseEntity.status(200).build();
    }

    /**
     * This will allow to delete tracking information by the tracking number.
     *
     * @param trackingNumber This is the tracking number that is relating to the tracking information that needs to be deleted.
     * @return A ResponseEntity will be shown to the user whether it was successful or there was an error.
     */
    @DeleteMapping(path = "/delete")
    public ResponseEntity<String> deleteTracking(@RequestParam("trackingNumber") String trackingNumber) {

        try {
            trackingService.deleteTrackingByNumber(trackingNumber);
            return ResponseEntity.status(200).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }


}
