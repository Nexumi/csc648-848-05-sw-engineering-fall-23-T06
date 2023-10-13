package com.orderowl.api.tracking;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class TrackingConfig {
    private TrackingEntity trackingEntity;
    @Bean
    CommandLineRunner commandLineRunner(TrackingRepository repository) {
        return args -> {

            List<TrackingEntity> allTrackingEntities = new ArrayList<>();

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

            allTrackingEntities.add(trackingEntity1);
            allTrackingEntities.add(trackingEntity2);
            allTrackingEntities.add(trackingEntity3);
            allTrackingEntities.add(trackingEntity4);
            allTrackingEntities.add(trackingEntity5);

            allTrackingEntities.addAll(trackingEntity.generateRandomTrackingEntities());
            repository.saveAll(allTrackingEntities);
        };
    }



}
