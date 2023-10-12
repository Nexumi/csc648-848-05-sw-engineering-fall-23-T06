package tracking.api;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class TrackingConfig {

    @Bean
    CommandLineRunner commandLineRunner(TrackingRepository repository){
        return args ->  {
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

            repository.saveAll(
                    List.of(trackingEntity1,trackingEntity2)
            );
        };
    }
}
