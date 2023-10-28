package com.orderowl.api.orders;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long order_id;

    private LocalDate date;
    private String tracking_number;
    private String status;
    private boolean hidden;
    private String retailer;
    private Long user_id;

    public Order() {
    }

    public Order(Long order_id, LocalDate date, String tracking_number, String status, boolean hidden, String retailer, Long user_id) {
        this.order_id = order_id;
        this.date = date;
        this.tracking_number = tracking_number;
        this.status = status;
        this.hidden = hidden;
        this.retailer = retailer;
        this.user_id = user_id;
    }

    public Order(LocalDate date, String tracking_number, String status, boolean hidden, String retailer, Long user_id) {
        this.date = date;
        this.tracking_number = tracking_number;
        this.status = status;
        this.hidden = hidden;
        this.retailer = retailer;
        this.user_id = user_id;
    }
}
