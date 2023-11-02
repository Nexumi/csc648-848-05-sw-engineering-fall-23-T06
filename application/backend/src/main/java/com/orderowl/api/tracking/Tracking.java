package com.orderowl.api.tracking;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "tracking")
public class Tracking {

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
    private boolean hidden;
    private Long user_id;

    public Tracking() {
    }

    public Tracking(Long id, String retailer, String carrier, LocalDate eta, String trackingNumber, String status, String location, String address, boolean hidden, Long user_id) {
        this.id = id;
        this.retailer = retailer;
        this.carrier = carrier;
        this.eta = eta;
        this.trackingNumber = trackingNumber;
        this.status = status;
        this.location = location;
        this.address = address;
        this.hidden = hidden;
        this.user_id = user_id;
    }

    public Tracking(String retailer, String carrier, LocalDate eta, String trackingNumber, String status, String location, String address, boolean hidden, Long user_id) {
        this.retailer = retailer;
        this.carrier = carrier;
        this.eta = eta;
        this.trackingNumber = trackingNumber;
        this.status = status;
        this.location = location;
        this.address = address;
        this.hidden = hidden;
        this.user_id = user_id;
    }

    // Using Lombok's @Data, we will automatically get access to getters and setters
}
