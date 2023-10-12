package tracking.api;

import jakarta.persistence.*;

import java.time.LocalDate;

// TrackingEntity.java
@Entity
public class TrackingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String retailer;
    private String Carrier;
    private LocalDate eta;
    private String trackingNumber;
    private String status;
    private String location;

    public TrackingEntity() {
    }

    public TrackingEntity(Long id, String retailer, String carrier, LocalDate eta, String trackingNumber, String status, String location) {
        this.id = id;
        this.retailer = retailer;
        Carrier = carrier;
        this.eta = eta;
        this.trackingNumber = trackingNumber;
        this.status = status;
        this.location = location;
    }

    public TrackingEntity(String retailer, String carrier, LocalDate eta, String trackingNumber, String status, String location) {
        this.retailer = retailer;
        Carrier = carrier;
        this.eta = eta;
        this.trackingNumber = trackingNumber;
        this.status = status;
        this.location = location;
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
        return Carrier;
    }

    public TrackingEntity setCarrier(String carrier) {
        Carrier = carrier;
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
}

