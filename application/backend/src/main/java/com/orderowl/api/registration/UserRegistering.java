package com.orderowl.api.registration;

import lombok.ToString;
import lombok.Getter;
import lombok.EqualsAndHashCode;
import lombok.AllArgsConstructor;

@ToString
@Getter
@EqualsAndHashCode
@AllArgsConstructor

public class UserRegistering {
    private String firstName;
    private String lastName;
    private String userID;
    private String emailID;
    private String passwordID;
    private String phoneID;
}
