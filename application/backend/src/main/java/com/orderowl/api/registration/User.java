package com.orderowl.api.registration;


import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NaturalId(mutable = true)
    private String email;

    private String first_name;
    private String last_name;
    private String password;
    private String phone_number;
    private String address;

    public User() {
    }

    public User(String email, String first_name, String last_name, String password, String phone_number, String address) {
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.phone_number = phone_number;
        this.address = address;
    }

    public User(Long id, String email, String first_name, String last_name, String password, String phone_number, String address) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.phone_number = phone_number;
        this.address = address;
    }

    // Using Lombok's @Data, we will automatically get access to getters and setters

}
