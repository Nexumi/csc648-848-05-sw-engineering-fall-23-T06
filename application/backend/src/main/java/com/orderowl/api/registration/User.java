/**
 * This is the Entity class for Users. This class will create a table inside the database with attributes.
 * It serves as a blueprint for the database
 */
package com.orderowl.api.registration;

import jakarta.persistence.*;
import lombok.Data;

// This will create an entity called users in the database
@Entity
@Table(name = "Users")
@Data
public class User {
    // primary key, and it will auto generate as we add to our database
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // attributes for our user entity
    private String email;
    private String first_name;
    private String last_name;
    private String password;
    private String phone_number;
    private String address;
<<<<<<< HEAD
    private String username;
=======
    private String role;
>>>>>>> a9b93888f54f39ecc34f623f4b35fd5727289dd2

    public User() {
    }

    public User(String email, String first_name, String last_name, String password, String phone_number, String address, String role) {
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.phone_number = phone_number;
        this.address = address;
<<<<<<< HEAD
        this.username = null;

=======
        this.role = role;
>>>>>>> a9b93888f54f39ecc34f623f4b35fd5727289dd2
    }

    public User(Long id, String email, String first_name, String last_name, String password, String phone_number, String address, String role) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.phone_number = phone_number;
        this.address = address;
<<<<<<< HEAD
        this.username = null;
=======
        this.role = role;
>>>>>>> a9b93888f54f39ecc34f623f4b35fd5727289dd2
    }

    // Using Lombok's @Data, we will automatically get access to getters and setters

}
