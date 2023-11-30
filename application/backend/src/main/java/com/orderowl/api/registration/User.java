/**
 * This is the Entity class for Users. This class will create a table inside the database with attributes.
 * It serves as a blueprint for the database
 *
 * Credit: Amigoscode Youtube Channel (https://youtu.be/VVn9OG9nfH0)
 */
package com.orderowl.api.registration;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

// This will create an entity called users in the database
@Entity
@Table(name = "Users")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {
    // primary key, and it will auto generate as we add to our database
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // attributes for our user entity
    private String email;
    private String firstname;
    private String lastname;
    private String password;
    private String address;
    private String enabled;
//    private String pin;

    @Enumerated(EnumType.STRING)
    private Role role;

    public User(Long id, String email, String firstname, String lastname, String password, String address,  Role role) {
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.address = address;
        this.role = role;
    }

    // Using Lombok's @NoArgsConstructor and @AllArgsConstructor,
    // we will automatically get access to no args and all args constructors

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

//    public String getPin(){
//        return pin;
//    }

    // Using Lombok's @Data, we will automatically get access to getters and setters

}
