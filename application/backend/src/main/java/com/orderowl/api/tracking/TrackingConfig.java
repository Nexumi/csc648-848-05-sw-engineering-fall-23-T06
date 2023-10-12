package com.orderowl.api.tracking;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

@Configuration
public class TrackingConfig {

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

            allTrackingEntities.addAll(generateRandomTrackingEntities());
            repository.saveAll(allTrackingEntities);
        };
    }

    protected List<TrackingEntity> generateRandomTrackingEntities() {
        List<TrackingEntity> trackingEntities = new ArrayList<>();

        for (int i = 0; i < 5; i++) { // Generate 5 random entities
            String retailer = generateRandomRetailer();
            String carrier = generateRandomCarrier();
            LocalDate eta = generateRandomEta();
            String trackingNumber = generateRandomTrackingNumber();
            String status = generateRandomStatus();
            String location = generateRandomLocation();
            String address = generateRandomAddress();

            TrackingEntity trackingEntity = new TrackingEntity(retailer, carrier, eta, trackingNumber, status, location, address);
            trackingEntities.add(trackingEntity);
        }

        return trackingEntities;
    }

    protected String generateRandomRetailer() {
        String[] retailers = {"Walmart",
                "Target",
                "Best Buy",
                "Apple Store",
                "Amazon"};
        Random random = new Random();
        int index = random.nextInt(retailers.length);
        return retailers[index];
    }
    protected String generateRandomCarrier() {
        String[] carriers = {"FedEx",
                "USPS",
                "DHL",
                "UPS"};
        Random random = new Random();
        int index = random.nextInt(carriers.length);
        return carriers[index];
    }
    protected LocalDate generateRandomEta() {
        LocalDate start = LocalDate.of(2023, 1, 1);
        LocalDate end = LocalDate.of(2023, 12, 31);
        long daysBetween = start.until(end).getDays();

        long randomDay = ThreadLocalRandom.current().nextLong(daysBetween + 1);
        return start.plusDays(randomDay);
    }
    protected String generateRandomTrackingNumber() {
        // Generate a random alphanumeric tracking number
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder trackingNumber = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < 12; i++) {
            char randomChar = characters.charAt(random.nextInt(characters.length()));
            trackingNumber.append(randomChar);
        }
        return trackingNumber.toString();
    }
    protected String generateRandomStatus() {
        String[] statuses = {"Delivered",
                "Out for Delivery",
                "In Transit",
                "Shipping"};
        Random random = new Random();
        int index = random.nextInt(statuses.length);
        return statuses[index];
    }
    protected String generateRandomLocation() {
        String[] locations = {"Local Store A",
                "Local Store B",
                "Local Store C",
                "Local Store D",
                "Distribution Center A"};
        Random random = new Random();
        int index = random.nextInt(locations.length);
        return locations[index];
    }
    protected String generateRandomAddress() {
        String[] addresses = {
                "123 Sapphire Street",
                "456 Maple Avenue",
                "789 Crimson Lane",
                "101 Emerald Drive",
                "567 Golden Gate Road"};
        Random random = new Random();
        int index = random.nextInt(addresses.length);
        return addresses[index];
    }

}
