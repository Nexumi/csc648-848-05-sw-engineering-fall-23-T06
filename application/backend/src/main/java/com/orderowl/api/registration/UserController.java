package com.orderowl.api.registration;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

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

    @GetMapping(path = "/search")
    public ResponseEntity<List<User>> searchUser(@RequestParam("email") String email, @RequestParam("password") String password) {
        List<User> users = userService.searchUser(email, password);

        if (!users.isEmpty()) {
            return new ResponseEntity<>(users, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
