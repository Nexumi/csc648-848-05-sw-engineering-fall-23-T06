package com.orderowl.api.tracking;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
