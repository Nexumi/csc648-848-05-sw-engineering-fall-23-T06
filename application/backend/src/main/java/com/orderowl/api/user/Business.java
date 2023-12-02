package com.orderowl.api.user;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Business")
@Data
public class Business extends User {

    private String businessName;
    private String licenseNumber;
    private String businessRegistrationDate;
    //Business constructor class
    public Business() {

    }

    // super is used here to inherit the attributes and methods from the User Parent class.
    public Business(Long id, String email, String first_name, String last_name, String password, String address,String businessName,String licenseNumber,String businessRegistrationDate) {
        super(id,email, first_name, last_name, password, address,Role.BUSINESS);
        this.businessName = businessName;
        this.licenseNumber = licenseNumber;
        this.businessRegistrationDate = businessRegistrationDate;

    }



}
