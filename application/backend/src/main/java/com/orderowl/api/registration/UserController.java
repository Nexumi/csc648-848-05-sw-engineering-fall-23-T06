package com.orderowl.api.registration;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping(path = "/api/registration")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<String> registerUser(@RequestBody User registrationRequest) {
        userService.registerUser(registrationRequest);
        return ResponseEntity.ok("Registration successful");
    }


}
