package com.orderowl.api.login;

import com.orderowl.api.registration.User;
import com.orderowl.api.registration.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/login")
public class LoginController {
    private final UserService userService;

    @Autowired
    public LoginController(UserService userService) {
        this.userService = userService;
    }
    //calls authUser which will then search for the user credentials and check if the user exists
    //if authUser returns true the http response status would be ok, giving a login successful message
    //if it fails then the http status would be 401 and user will not be able to login
    @PostMapping
    public ResponseEntity<String> loginUser(@RequestBody User loginRequest) {

        if (userService.authUser(loginRequest)) {
            return ResponseEntity.ok("Login successful");
        }
        else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}