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
    @DeleteMapping(path = "/delete/{trackingNumber}")
    public ResponseEntity<String> deleteTracking ( @PathVariable("trackingNumber") String trackingNumber) {

        try {
            trackingService.deleteTrackingByNum(trackingNumber);
            return ResponseEntity.status(200).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).build();
        }

    }
}
