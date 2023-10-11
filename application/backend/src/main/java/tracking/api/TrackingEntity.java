package tracking.api;

import jakarta.persistence.*;

// TrackingEntity.java
@Entity
@Table
public class TrackingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String trackingNumber;
    private String status;

    public TrackingEntity() {
    }

    public TrackingEntity(Long id, String trackingNumber, String status) {
        this.id = id;
        this.trackingNumber = trackingNumber;
        this.status = status;
    }

    public TrackingEntity(String trackingNumber, String status) {
        this.trackingNumber = trackingNumber;
        this.status = status;
    }

    public String getStatus() {return status;}
    public String getTrackingNumber() {return trackingNumber;}
    public Long getId() {return id;}

    public void setId(Long id) {}
    public TrackingEntity setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;}

    public TrackingEntity setStatus(String status) {this.status = status;return this;}

    // Getters and setters


    @Override
    public String toString() {
        return super.toString();
    }
}

