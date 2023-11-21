/**
 * Credit: Amigoscode Youtube Channel (https://youtu.be/VVn9OG9nfH0)
 * Object to hold the token during the HTTP call
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
public class AuthenticationResponse {

    private String token;
}
