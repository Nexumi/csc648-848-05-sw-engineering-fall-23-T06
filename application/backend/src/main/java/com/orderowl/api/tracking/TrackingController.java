/**
 * This is the control center for handling tracking-related tasks using web requests.
 * It manages actions related to tracking data using a web-based interface.
 *
 * - You can access its functions through the "/api/tracking" web address.
 * - It can fetch and display a list of tracking records when you send a GET request.
 * - You can create new tracking records by sending data using a POST request.
 *
 * The @RestController tag marks this class as a part of the web system.
 */
package com.orderowl.api.tacking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/tracking") // Defines the base URL path for this controller
public class TrackingController {

    private final TrackingService trackingService;  // Service that handles tracking operations

    @Autowired
    public TrackingController(TrackingService trackingService) {
        this.trackingService = trackingService;  // Dependency injection of TrackingService
    }

    @GetMapping  // Handles HTTP GET requests to the base URL path
    public List<TrackingEntity> getTracking() {
        return trackingService.getTracking();  // Retrieves and returns a list of tracking entities
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrackingEntity> getTestEntityById(@PathVariable Long id) {
        TrackingEntity testEntity = trackingService.getTestEntityById(id);
        if (testEntity != null) {
            return new ResponseEntity<>(testEntity, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping  // Handles HTTP POST requests to the base URL path
    public void registerNewTracking(@RequestBody TrackingEntity tracking) {
        trackingService.addNewTracking(tracking);  // Registers a new tracking entity using the provided data
    }

    @GetMapping("/search") // Define the search endpoint
    public List<TrackingEntity> searchTracking(@RequestParam("searchText") String searchText) {
        return trackingService.searchTracking(searchText); // Call the service to perform the search
    }

}
