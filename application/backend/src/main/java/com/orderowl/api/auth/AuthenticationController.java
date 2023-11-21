/**
 * Credit: Amigoscode Youtube Channel (https://youtu.be/VVn9OG9nfH0)
 * This is where we direct the HTTP requests based on the type of request and URL
 */
package com.orderowl.api.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @GetMapping
    public ResponseEntity<String> helloFromAuth() {
        System.out.println("Hello from auth");
        return ResponseEntity.ok("Hello from Authentication");
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
