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
    public List<TrackingEntity> getTracking() {

        return trackingRepository.findAll();
    }

    @Cacheable("tracking")
    public TrackingEntity getTrackingEntityById(Long id) {

        return trackingRepository.findById(id).orElse(null);
    }

    public void addNewTracking(TrackingEntity tracking) {

        trackingRepository.save(tracking);
    }

    public List<TrackingEntity> searchTracking(String searchText) {

        return trackingRepository.searchTracking(searchText);
    }

}


