package com.orderowl.api.tracking;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class TrackingConfig {
    private Tracking tracking;

    @Bean
    CommandLineRunner commandLineRunner(TrackingRepository repository){
        return args -> {
            Tracking tracking1 = new Tracking(
                    "Amazon",
                    "USPS",
                    LocalDate.of(2023, 9, 20), // Replace with the desired date
                    "ABC123456789",
                    "In Transit",
                    "Las Vegas, NV",
                    "1801 S Decatur Blvd, Las Vegas, NV 89102",
                    false,
                    1L );
            Tracking tracking2 = new Tracking(
                    "Target",
                    "USPS",
                    LocalDate.of(2023, 10, 31), // Replace with the desired date
                    "XYZ101010",
                    "Out for Delivery",
                    "San Francisco, CA",
                    "1800 Taraval St, San Francisco, CA 94116",
                    false,
                    1L );
            repository.saveAll(List.of(tracking1, tracking2));

        };
    }
}
