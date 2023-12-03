/**
 * This class allows us to initialize our tracking entity along with the information for
 * our for the order's shipment.
 */

package com.orderowl.api.tracking;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Tracking")
public class Tracking {

    // This will essentially be the Primary key for our tracking entity,
    // and it will auto generate as we add to our database.
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
    private String title;


    public Tracking(String retailer, String carrier, LocalDate eta, String trackingNumber, String status,
                    String location, String address, boolean hidden, Long user_id) {
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
    public Tracking(String retailer, String carrier, LocalDate eta, String trackingNumber, String status,
                    String location, String address, boolean hidden, Long user_id, String title) {
        this.retailer = retailer;
        this.carrier = carrier;
        this.eta = eta;
        this.trackingNumber = trackingNumber;
        this.status = status;
        this.location = location;
        this.address = address;
        this.hidden = hidden;
        this.user_id = user_id;
        this.title = title;
    }

    // Using Lombok's @Data, we will automatically get access to getters and setters
}
