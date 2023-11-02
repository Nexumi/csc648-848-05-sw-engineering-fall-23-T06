/**
 * This allows the application to directly add tracking information to the database.
 * It uses spring boot's commandline runner to add data on startup.
 */
package com.orderowl.api.tracking;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class TrackingConfig {
    @Bean
    CommandLineRunner commandLineRunner(TrackingRepository repository) {
        return args -> {
            // some fake tracking information added
            // The locations are carrier stores located in those cities
            Tracking tracking1 = new Tracking(
                    "Amazon",
                    "USPS",
                    LocalDate.of(2023, 9, 20), // Replace with the desired date
                    "ABC123456789",
                    "In Transit",
                    "Las Vegas, NV",
                    "1801 S Decatur Blvd, Las Vegas, NV 89102",
                    false,
                    1L);
            Tracking tracking2 = new Tracking(
                    "Target",
                    "USPS",
                    LocalDate.of(2023, 10, 31), // Replace with the desired date
                    "XYZ101010",
                    "Out for Delivery",
                    "San Francisco, CA",
                    "1800 Taraval St, San Francisco, CA 94116",
                    false,
                    1L);
            Tracking tracking3 = new Tracking(
                    "Amazon",
                    "UPS",
                    LocalDate.of(2023, 11, 2),
                    "DEF789012",
                    "Delivered",
                    "Los Angeles, CA",
                    "2202 S Figueroa St, Los Angeles, CA 90007",
                    false,
                    3L
            );
            Tracking tracking4 = new Tracking(
                    "Best Buy",
                    "DHL",
                    LocalDate.of(2023, 11, 3),
                    "GHI345678",
                    "Pending",
                    "Chicago, IL",
                    "886 2nd Ave, New York, NY 10017",
                    false,
                    4L
            );
            Tracking tracking5 = new Tracking(
                    "Walmart",
                    "FedEx",
                    LocalDate.of(2023, 11, 1),
                    "ABC123456",
                    "In Transit",
                    "New York, NY",
                    "560 W 42nd St, New York, NY 10036",
                    false,
                    2L
            );

            // directly access the repository to save the fake tracking information
            repository.saveAll(List.of(tracking1, tracking2, tracking3, tracking4, tracking5));

        };
    }
}
