/**
 * This class will represent a user entity for the owlUsers application.
 * Will also be implementing the UserDetails interface for Spring Security integration.
 * In charge of containing user information such as name, email, password, and role.
 */
package com.orderowl.api.owlUsers;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
// This class will represent the user entity in the database
@Entity
public class owlUsers implements UserDetails {

    @jakarta.persistence.Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private Long id;
    private String firstNameID;
    private String lastNameID;
    private String emailID;
    private String passwordID;
    @Enumerated(EnumType.STRING)
    private owlUserRole owlUserRole; // Roles for users (admin/user)
    private Boolean locked = false;
    private Boolean enabled = false;

    public owlUsers(String firstName,
                    String lastName,
                    String email,
                    String password,
                    owlUserRole appUserRole) {
        this.firstNameID = firstName;
        this.lastNameID = lastName;
        this.emailID = email;
        this.passwordID = password;
        this.owlUserRole = appUserRole;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority =
                new SimpleGrantedAuthority(owlUserRole.name());
        return Collections.singletonList(authority);
    }

    @Override
    public String getPassword() {
        return passwordID;
    }

    @Override
    public String getUsername() {
        return emailID;
    }

    public String getFirstName() {
        return firstNameID;
    }

    public String getLastName() {
        return lastNameID;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

    // This is the getter and setter for the user ID
    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}