package tracking.api;


import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TrackingService {

    TrackingEntity trackingEntity = new TrackingEntity(
            "Amazon",                     // Retailer
            "UPS",                        // Carrier
            LocalDate.of(2023, 12, 31),   // ETA (Year, Month, Day)
            "ABC123456789",               // Tracking Number
            "In Transit",                // Status
            "Distribution Center A",      // Location
            "mason st."
    );

    public List<TrackingEntity> getTracking(){
        return List.of(
                trackingEntity
        );
    }
}


