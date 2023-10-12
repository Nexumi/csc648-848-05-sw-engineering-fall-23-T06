package tracking.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TrackingService {

    private final TrackingRepository trackingRepository;

    TrackingEntity trackingEntity = new TrackingEntity(
            "Amazon",                     // Retailer
            "UPS",                        // Carrier
            LocalDate.of(2023, 12, 31),   // ETA (Year, Month, Day)
            "ABC123456789",               // Tracking Number
            "In Transit",                // Status
            "Distribution Center A",      // Location
            "mason st."
    );

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
        return List.of(
                trackingEntity
        );

    }
}


