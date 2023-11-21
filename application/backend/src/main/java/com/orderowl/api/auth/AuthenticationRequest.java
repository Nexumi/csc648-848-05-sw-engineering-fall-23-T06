/**
 * Credit: Amigoscode Youtube Channel (https://youtu.be/VVn9OG9nfH0)
 * Object to hold the login HTTP request
 */
package com.orderowl.api.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {

    private String email;
    String password;
}
