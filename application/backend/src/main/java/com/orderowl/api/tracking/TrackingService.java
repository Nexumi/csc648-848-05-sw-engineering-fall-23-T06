package com.orderowl.api.tacking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrackingService {

    private final TrackingRepository trackingRepository;

    @Autowired
    public TrackingService(TrackingRepository trackingRepository) {
        this.trackingRepository = trackingRepository;
    }

    public List<TrackingEntity> getAllTracking() {
        List<TrackingEntity> tracking = trackingRepository.findAll();
        System.out.println("Retrieved " + tracking.size() + " entities from the database.");
        return tracking;

    }

    public List<TrackingEntity> getTracking(){
        return trackingRepository.findAll();

    }
    public TrackingEntity getTestEntityById(Long id) {
        return trackingRepository.findById(id).orElse(null);
    }

    public void addNewTracking(TrackingEntity tracking) {
        System.out.println(tracking);
    }

    public List<TrackingEntity> searchTracking(String searchText) {
        return trackingRepository.searchTracking(searchText);
    }

}


