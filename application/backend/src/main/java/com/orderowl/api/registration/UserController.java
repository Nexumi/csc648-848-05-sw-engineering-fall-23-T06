/**
 * This is the control layer of spring boot
 * It handles the HTTP requests it receives from the front end
 * It will automatically handle the get request and direct them to the correct method
 */

package com.orderowl.api.registration;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

@RestController
// the base path will be the address the front end uses to interact with the database
@RequestMapping(path = "/api/registration")
public class UserController {
    // we use this variable to access the service layer for user related database operations
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // TODO: delete this later
//    /**
//     * This handles HTTP GET requests to search for a user. We add "/search" to the base url to show that this is a search
//     *
//     * @param email    This is the email parameter we use to search for the user
//     * @param password This is the password parameter we use to search for the user
//     * @return It will return a success message if user is found and NOT_FOUND if user is not in database
//     */
//    @GetMapping(path = "/search")
//    public ResponseEntity<List<User>> searchUser(@RequestParam("email") String email, @RequestParam("password") String password) {
//        List<User> users = userService.searchUser(email);
//
//        if (!users.isEmpty()) {
//            return new ResponseEntity<>(users, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

    /**
     * This will handle the HTTP DELETE requests to delete a User when the user no longer needs the account.
     *
     * @param id This ID will be the one that is used to delete the user that is relating to the ID.
     * @return A ResponseEntity that will let us know if deleting the user was a success or a failure if nothing was found with that ID.
     */
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable("id") Long id) {
        userService.deleteUserById(id);
        return ResponseEntity.status(200).build();
    }

    // TODO: update profile information
//    @PostMapping(path = "/address")
//    public ResponseEntity<String> changeAddress(@RequestBody User currentUser, @RequestBody String address) {
//        return ResponseEntity.ok(userService.changeAddress(currentUser, address));
//    }
    // TODO: update username
//    @PostMapping(path = "/update/username")
//    public ResponseEntity<String> changeUsername (@PathVariable("email") String userEmail, @RequestBody String usernameRequest) {
//        Optional<User> updatedUser = userService.changeUsername(userEmail, usernameRequest);
//
//        if (updatedUser.isPresent()) {
//            return ResponseEntity.ok("Username updated successfully");
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//        }
//    }
// Credit: https://www.youtube.com/watch?v=kV5RYc7JZOs
    // might have to change to pass email instead and in userService find user using findByEmail
//    @PutMapping(path = "/update/name")
//    public ResponseEntity<User> updateUsername(@RequestBody User request) {
//        return ResponseEntity.ok(userService.updateUsername(request));
//    }

    /**
     * @param userEmail this part will look for the current email that is creating a new pin
     * @param pin will hold the pin that is typed in
     * @return the new pin to put in the database
     */
    @PutMapping(path = "/update/pin")
    public ResponseEntity<User> newUserPin(@PathVariable("email") String userEmail, @RequestBody String pin) {

        return ResponseEntity.ok(userService.newUserPin(userEmail, pin));
    }

}
