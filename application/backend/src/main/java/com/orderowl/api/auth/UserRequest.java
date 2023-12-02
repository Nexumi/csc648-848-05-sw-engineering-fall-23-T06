package com.orderowl.api.auth;

import com.orderowl.api.user.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRequest {

    private Long id;
    private String email;
    private String firstname;
    private String lastname;
    private String address;
    private String enabled;
    private String pin;
    private Role role;

}
