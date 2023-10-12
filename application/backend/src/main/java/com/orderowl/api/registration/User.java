package com.orderowl.api.registration;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;

    private String password;
    private String email;
    private String phone_number;
    private String address;

    public User() {
    }

    public User(Long id, String username, String password, String email, String phone_number, String address) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
    }

    public User(String username, String password, String email, String phone_number, String address) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
    }

    // Using Lombok's @Data, we will automatically get access to getters and setters

}
