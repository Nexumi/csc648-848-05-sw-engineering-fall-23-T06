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
