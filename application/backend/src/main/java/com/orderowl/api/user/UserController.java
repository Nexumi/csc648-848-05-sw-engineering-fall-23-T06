/**
 * This is the control layer of spring boot
 * It handles the HTTP requests it receives from the front end
 * It will automatically handle the get request and direct them to the correct method
 */

package com.orderowl.api.user;


import com.orderowl.api.tracking.UserPinRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

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
     * @return A ResponseEntity that will let us know if deleting the user was a success or a failure if nothing
     * was found with that ID.
     */
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable("id") Long id) {
        userService.deleteUserById(id);
        return ResponseEntity.status(200).build();
    }


    /**
     *
     * @param user will be carrying the new pin that is going to be created.
     * @return the new user that was created by the pin.
     */
    @PutMapping(path = "/update/pin")
    public ResponseEntity<User> newUserPin(@RequestBody UserPinRequest user) {
        return ResponseEntity.ok(userService.newUserPin(user));
    }

}