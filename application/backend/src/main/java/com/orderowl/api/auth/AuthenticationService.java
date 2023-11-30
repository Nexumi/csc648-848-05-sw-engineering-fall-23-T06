/**
 * Credit: Amigoscode Youtube Channel (https://youtu.be/VVn9OG9nfH0)
 * This is java class handles creating and authenticating a client
 */
package com.orderowl.api.auth;

import com.orderowl.api.config.JwtService;
import com.orderowl.api.registration.Role;
import com.orderowl.api.registration.User;
import com.orderowl.api.registration.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    // repository directly interacts with the database
    private final UserRepository repository;
    // we use bcrypt to encode our passwords
    private final PasswordEncoder passwordEncoder;
    // this is the java web token (JWT) service used to authorize access to protected APIs
    private final JwtService jwtService;
    // this springboot class helps us check if the request input is valid and verified
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var existingUser = repository.findByEmail(request.getEmail());

        if (existingUser.isPresent()) {
            throw new RuntimeException("Email exists");
        }

        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole()) //please use 0 1
                .build();
        repository.save(user);
        // this token is later used to validate the client and access protected APIs
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    // we use this for login
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();

        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
