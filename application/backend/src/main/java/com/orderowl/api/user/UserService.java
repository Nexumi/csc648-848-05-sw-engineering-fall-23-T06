/**
 * This is the service layer of our spring boot application
 * It handles the interactions with the database
 */
package com.orderowl.api.user;

import com.orderowl.api.tracking.UserPinRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    // this variable is used to represent the database like a java object
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {

        this.userRepository = userRepository;
    }


    /**
     * This will allow use to delete a user by their ID that is connected to that certain use.
     *
     * @param id Will be the ID that is related to the account that needs to be deleted.
     */
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }


    /**
     *
     * @param request the request will be able to hold the email and pin to verify the pin that has been input.
     */
    public boolean validatePin(UserPinRequest request){
        var user = userRepository.findByEmail(request.getEmail());
        if(user.get().getPin() == request.getPin() || !user.isEmpty()){
            return true;
        }
        return false;
    }

    /**
     *
     * @param user will help us hold both email and pin
     * @return the new updated pin along with the email that it goes with.
     */
    public User newUserPin(UserPinRequest user) {
        var user1 = userRepository.findByEmail(user.getEmail()).orElseThrow();
        user1.setPin(user.getPin());
        return userRepository.save(user1);
    }

    public User findById(Long userId) {
        return userRepository.findById(userId).orElseThrow();
    }
}