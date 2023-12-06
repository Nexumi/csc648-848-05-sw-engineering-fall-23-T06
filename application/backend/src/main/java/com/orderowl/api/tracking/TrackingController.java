/**
 * This class will take care of our requests regarding tracking information on the HTTPS side.
 */

package com.orderowl.api.tracking;

import com.orderowl.api.user.User;
import com.orderowl.api.user.UserService;
import jakarta.validation.constraints.Max;
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
    private final UserService userService;

    @Autowired
    public TrackingController(TrackingService trackingService, UserService userService) {

        this.trackingService = trackingService;
        this.userService = userService;
    }

    /**
     * This will recover all the tracking information
     *
     * @return A List of all the tracking orders
     */
    @GetMapping
    public List<Tracking> getTrackingInfo(@RequestParam Long userId) {

        return trackingService.getTrackingInfo(userId);
    }

    /**
     * This will recover the tracking information by the ID
     *
     * @param id This will hold the ID of the tracking info.
     * @return The Tracking, This will return the tracking order that is relating to the ID, or it will return null if there is nothing.
     */
    @GetMapping(path = "/{id:[0-9]*}")
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
    public ResponseEntity<?> registerNewTracking(@RequestParam Long userId, @RequestBody Tracking tracking) {

        try {

            User user = userService.findById(userId);
            tracking.setUser(user);
        // this is used strictly for the use cases
        // when the user enters the tracking number it will show the appropriate values for that tracking info
        if (tracking.getTrackingNumber().equals("123456789012")) {

            Tracking tracking1 = new Tracking(
                    "eBay",
                    "USPS",
                    LocalDate.of(2023, 10, 27),
                    "123456789012",
                    "Shipped",
                    "NY, NY",
                    "6 Doyers St, New York, NY 10013",
                    false,
                    tracking.getTitle(),
                    user
            );
            trackingService.addNewTracking(tracking1);
            return new ResponseEntity<>(tracking1, HttpStatus.OK);
        } else if (tracking.getTrackingNumber().equals("ABC123456")){
            Tracking tracking1 = new Tracking(
                    "Amazon",
                    "Amazon",
                    LocalDate.of(2023, 12, 12),
                    "A1B2C3D4",
                    "Shipped",
                    "LA Sorting Facility",
                    "6400 Valley View St, Buena Park, CA 90620",
                    false,
                    tracking.getTitle(),
                    user
            );
            trackingService.addNewTracking(tracking1);
            return new ResponseEntity<>(tracking1, HttpStatus.OK);
        } else if (tracking.getTrackingNumber().equals("A2B4C6")) {
            Tracking tracking1 = new Tracking(
                    "Amazon",
                    "Amazon",
                    LocalDate.of(2023, 12, 14),
                    "A2B4C6",
                    "Shipped",
                    "SF Sorting Facility",
                    "5000-5200 Giant Hwy, Richmond, CA 94806",
                    false,
                    tracking.getTitle(),
                    user
            );
            trackingService.addNewTracking(tracking1);
            return new ResponseEntity<>(tracking1, HttpStatus.OK);
        }

            trackingService.addNewTracking(tracking);
            return new ResponseEntity<>(tracking, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Failed to register: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Allows to search for tracking information using text based searches.
     *
     * @param searchText This will be text that is used to search for the tracking information.
     * @return A List After a search has been entered, it will return a list of tracking information matching the search criteria.
     */
    @GetMapping(path = "/search")
    public ResponseEntity<List<Tracking>> searchTracking(@RequestParam Long userId,
                                                         @RequestParam("searchText") @Max(30) String searchText,
                                                         @RequestParam(defaultValue = "false") boolean hidden,
                                                         @RequestParam(required = false) String pin) {

        return ResponseEntity.ok(trackingService.searchTracking(userId, searchText, hidden, pin));
    }

    /**
     * This method helps us find the number of orders that have not been delivered yet
     *
     * @return Returns the number of orders that are not delivered yet
     */
    @GetMapping(path = "/count")
    public ResponseEntity<Integer> getTrackingCount(@RequestParam Long userId) {

        int trackingCount = trackingService.getTrackingCount(userId);
        return new ResponseEntity<>(trackingCount,HttpStatus.OK);
    }

    /**
     *
     * @param user will be checking if the pin and email is matching in order to get the hidden list
     * @return this will return the response if the pin was correct or not
     */
    @PostMapping(path = "/hidden")
    public ResponseEntity<List<Tracking>> hiddenTracking(@RequestBody UserPinRequest user) {
        List<Tracking> hiddenTrackingList = trackingService.getHiddenTracking(user);

        if (hiddenTrackingList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(hiddenTrackingList, HttpStatus.OK);
        }
    }

    @DeleteMapping(path = "/delete/{id:[0-9]*]}")
    public ResponseEntity<String> deleteTrackingById(@PathVariable("id") Long id) {

        trackingService.deleteById(id);
        return ResponseEntity.status(200).build();
    }

    /**
     * This will allow the user to delete tracking information by the tracking number.
     *
     * @param trackingNumber This is the tracking number that is relating to the tracking information that needs to be deleted.
     * @return A ResponseEntity will be shown to the user whether it was successful or there was an error.
     */
    @DeleteMapping(path = "/delete")
    public ResponseEntity<String> deleteTracking(@RequestParam("trackingNumber") String trackingNumber) {

        try {
            trackingService.deleteTrackingByNumber(trackingNumber);
            return new ResponseEntity<>(trackingNumber + " was deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }


}
