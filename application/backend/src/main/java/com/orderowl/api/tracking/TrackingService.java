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

    @Cacheable("tracking")
    public List<Tracking> getTrackingInfo() {
        return trackingRepository.findAll();
    }

    @Cacheable("tracking")
    public Tracking getTrackingById(Long id) {
        return trackingRepository.findById(id).orElse(null);
    }
}
