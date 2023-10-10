package tracking.api;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

// TrackingEntity.java
@Entity
public class TrackingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String trackingNumber;
    private String status;

    public String getStatus() {return status;}
    public String getTrackingNumber() {return trackingNumber;}
    public Long getId() {return id;}

    public void setId(Long id) {}
    public TrackingEntity setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;}

    public TrackingEntity setStatus(String status) {this.status = status;return this;}

    // Getters and setters
}

