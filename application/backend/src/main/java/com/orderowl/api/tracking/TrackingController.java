package com.orderowl.api.tracking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public List<Tracking> getTrackingInfo(){

        return trackingService.getTrackingInfo();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Tracking> getTrackingById(@PathVariable Long id) {

        Tracking tracking = trackingService.getTrackingById(id);
        if (tracking == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(tracking, HttpStatus.OK);
        }
    }

    @PostMapping
    public ResponseEntity<Tracking> registerNewTracking(@RequestBody Tracking tracking) {

        trackingService.addNewTracking(tracking);
        return new ResponseEntity<>(tracking,HttpStatus.OK);
    }

    @GetMapping(path = "/search")
    public List<Tracking> searchTracking(@RequestParam("searchText") String searchText) {

        return trackingService.searchTracking(searchText);
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteTrackingById (@PathVariable("id") Long id) {
        trackingService.deleteById(id);
        return ResponseEntity.status(200).build();
    }

    @DeleteMapping(path = "/delete")
    public ResponseEntity<String> deleteTracking ( @RequestParam("trackingNumber") String trackingNumber) {

        try {
            trackingService.deleteTrackingByNumber(trackingNumber);
            return ResponseEntity.status(200).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }


}
