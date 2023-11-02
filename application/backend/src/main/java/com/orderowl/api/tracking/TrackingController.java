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

    @GetMapping
    public List<Tracking> getTrackingInfo() {

        return trackingService.getTrackingInfo();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Tracking> getTrackingById(@PathVariable Long id) {

        Tracking tracking = trackingService.getTrackingById(id);
        if (tracking == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(tracking, HttpStatus.OK);
        }
    }

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
     * Allows the users to search for tracking information using text based searches.
     *
     * @param searchText This will be text that is used to search for the tracking information.
     * @return A List After a search has been entered, it will return a list of tracking information matching the search criteria.
     */
    @GetMapping(path = "/search")
    public List<Tracking> searchTracking(@RequestParam("searchText") String searchText) {

        return trackingService.searchTracking(searchText);
    }

    /**
     * This method helps us find the number of orders that have not been delivered yet
     *
     * @return Returns the number of orders that are not delivered yet
     */
    @GetMapping(path = "/count")
    public ResponseEntity<Integer> getTrackingCount() {

        int trackingCount = trackingService.getTrackingCount();
        return new ResponseEntity<>(trackingCount,HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteTrackingById(@PathVariable("id") Long id) {

        trackingService.deleteById(id);
        return ResponseEntity.status(200).build();
    }

//    /**
//     * This will allow the user to delete tracking information by the tracking number.
//     *
//     * @param trackingNumber This is the tracking number that is relating to the tracking information that needs to be deleted.
//     * @return A ResponseEntity will be shown to the user whether it was successful or there was an error.
//     */
//    @DeleteMapping(path = "/delete")
//    public ResponseEntity<String> deleteTracking(@RequestParam("trackingNumber") String trackingNumber) {
//
//        trackingService.deleteTrackingByNumber(trackingNumber);
//
//        return new ResponseEntity<>(trackingNumber+" was deleted", HttpStatus.OK);
//
//        return new ResponseEntity<>(trackingNumber+" was NOT deleted", HttpStatus.NOT_FOUND);
//
//
//    }


}
