package com.orderowl.api.tracking;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

@Entity
public class TrackingEntity  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String retailer;
    private String carrier;
    private LocalDate eta;
    private String trackingNumber;
    private String status;
    private String location;
    private String address;


    public TrackingEntity() {
    }

    public TrackingEntity(Long id, String retailer, String carrier, LocalDate eta, String trackingNumber, String status, String location,String address) {
        this.id = id;
        this.retailer = retailer;
        this.carrier = carrier;
        this.eta = eta;
        this.trackingNumber = trackingNumber;
        this.status = status;
        this.location = location;
        this.address = address;  // Initialize the new variable.
    }

    public TrackingEntity(String retailer, String carrier, LocalDate eta, String trackingNumber, String status, String location, String address) {
        this.retailer = retailer;
        this.carrier = carrier;
        this.eta = eta;
        this.trackingNumber = trackingNumber;
        this.status = status;
        this.location = location;
        this.address = address;
    }

    public Long getId() {
        return id;
    }

    public TrackingEntity setId(Long id) {
        this.id = id;
        return this;
    }

    public String getRetailer() {
        return retailer;
    }

    public TrackingEntity setRetailer(String retailer) {
        this.retailer = retailer;
        return this;
    }

    public String getCarrier() {
        return carrier;
    }

    public TrackingEntity setCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }

    public LocalDate getEta() {
        return eta;
    }

    public TrackingEntity setEta(LocalDate eta) {
        this.eta = eta;
        return this;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }

    public TrackingEntity setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }

    public String getStatus() {
        return status;
    }

    public TrackingEntity setStatus(String status) {
        this.status = status;
        return this;
    }

    public String getLocation() {
        return location;
    }

    public TrackingEntity setLocation(String location) {
        this.location = location;
        return this;
    }

    public String getAddress() {
        return address;
    }

    public TrackingEntity setAddress(String address) {
        this.address = address;
        return this;
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
