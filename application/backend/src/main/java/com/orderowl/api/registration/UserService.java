/**
 * This is the service layer of our spring boot application
 * It handles the interactions with the database
 */
package com.orderowl.api.registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    // this variable is used to represent the database like a java object
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    /**
     * This is used to add the user through save method in our database
     *
     * @param registrationRequest This is the registration data that will be saved
     */
    public void registerUser(User registrationRequest) {

        userRepository.save(registrationRequest);
    }

    /**
     * This will search the database using the email and password
     *
     * @param email    This is the email parameter used for searching
     * @param password This is the password parameter used for searching
     * @return This will return the list of users matching the email and password
     */
    public List<User> searchUser(String email, String password) {

        return userRepository.findByEmailAndPassword(email, password);
    }

    /**
     * This will return true or false if the user's email and password exist in the user database
     *
     * @param userAuth this is the user object that contains the email and password to be searched
     * @return Return true or false depending on if the user is in the database or not
     */
    public boolean authUser(User userAuth) {
        List<User> users = searchUser(userAuth.getEmail(), userAuth.getPassword());
        if (!users.isEmpty())
            return true;
        else
            return false;
    }

    /**
     * This will allow use to delete a user by their ID that is connected to that certain use.
     *
     * @param id Will be the ID that is related to the account that needs to be deleted.
     */
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
}
