/**
 * Credit: Amigoscode Youtube Channel (https://youtu.be/VVn9OG9nfH0)
 * We use this object to handle the HTTP request for register
 */
package com.orderowl.api.auth;

import com.orderowl.api.registration.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Role role;
}
