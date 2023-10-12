package tracking.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TrackingService {

    private final TrackingRepository trackingRepository;

    @Autowired
    public TrackingService(TrackingRepository trackingRepository) {
        this.trackingRepository = trackingRepository;
    }

    TrackingEntity trackingEntity1 = new TrackingEntity(
            "Walmart",                    // Retailer
            "FedEx",                      // Carrier
            LocalDate.of(2023, 12, 15),  // ETA (Year, Month, Day)
            "XYZ987654321",               // Tracking Number
            "Delivered",                 // Status
            "Local Store A",             // Location
            "456 Elm St"                 // Address
    );

    TrackingEntity trackingEntity2 = new TrackingEntity(
            "Target",                     // Retailer
            "USPS",                       // Carrier
            LocalDate.of(2023, 12, 28),  // ETA (Year, Month, Day)
            "DEF123456789",               // Tracking Number
            "Out for Delivery",          // Status
            "Local Store B",             // Location
            "789 Oak St"                 // Address
    );

    TrackingEntity trackingEntity3 = new TrackingEntity(
            "Best Buy",                   // Retailer
            "DHL",                        // Carrier
            LocalDate.of(2023, 12, 20),  // ETA (Year, Month, Day)
            "MNO987654321",               // Tracking Number
            "In Transit",                // Status
            "Local Store C",             // Location
            "101 Pine St"                // Address
    );


    TrackingEntity trackingEntity4 = new TrackingEntity(
            "Apple Store",                // Retailer
            "UPS",                        // Carrier
            LocalDate.of(2023, 12, 31),  // ETA (Year, Month, Day)
            "PQR123456789",               // Tracking Number
            "Shipping",                  // Status
            "Local Store D",             // Location
            "222 Cedar St"               // Address
    );

    TrackingEntity trackingEntity5 = new TrackingEntity(
            "Amazon",                     // Retailer
            "UPS",                        // Carrier
            LocalDate.of(2023, 12, 31),   // ETA (Year, Month, Day)
            "ABC123456789",               // Tracking Number
            "In Transit",                // Status
            "Distribution Center A",      // Location
            "123 Main St"                // Address
    );
    public List<TrackingEntity> getAllTracking() {
        List<TrackingEntity> tracking = trackingRepository.findAll();
        System.out.println("Retrieved " + tracking.size() + " entities from the database.");
        return tracking;

    }

    public List<TrackingEntity> getTracking(){
        return trackingRepository.findAll();

    }
}


