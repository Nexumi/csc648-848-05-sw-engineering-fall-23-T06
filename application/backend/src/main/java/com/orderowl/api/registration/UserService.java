/**
 * This is the service layer of our spring boot application
 * It handles the interactions with the database
 */
package com.orderowl.api.registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    // this variable is used to represent the database like a java object
    private final UserRepository userRepository;

    /**
     * createDelegatingPasswordEncoder is an algorithm that detects what
     * the password is encoded with and handle the verification of passwords
    */
    PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

    /**
     * creating an instance for PasswordEncoder,
     * createDelegatingPasswordEncoder is an algorithm that detects what
     * the password is encoded with and handle the verification of passwords
     */
    @Autowired
    public UserService(UserRepository userRepository) {

        this.userRepository = userRepository;
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
     * Using PasswordEncoder to verify if the password given matches with the encrypted password
     *
     * @param userAuth this is the user object that contains the email and password to be searched
     * @return Return true or false depending on if the user is in the database or not
     */
    public boolean authUser(User userAuth) {
        String userPassword = userAuth.getPassword();

        List<User> users = searchUser(userAuth.getEmail(), userAuth.getPassword());

        if (!users.isEmpty()) {
            if(passwordEncoder.matches(userPassword,users.get(0).getPassword()))
                return true;
        }
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




//    /**
//     * This will allow us to authenticate if the PIN was put in correctly
//     *
//     * @param email this is the email that is linked to the pin
//     * @param pin This is the pin that was given by the user
//     * @return Will let the user know if it is correct or not
//     */

//    public boolean validatePin(String email, String pin){
//        Optional<User> users = userRepository.findByEmail(email);
//        if(!users.isEmpty() && users.get().getPin() !=  null){
//            return pin.equals(users.get().getPin());
//        }
//        return false;
//    }
//
//    public String changeAddress(User currentUser, String address) {
//        searchUser(currentUser.getEmail())

//    public Optional<User> changeUsername(String userEmail, String usernameRequest) {
//        Optional<User> changeUser = userRepository.findByEmail(userEmail);
//
//        if(changeUser.isPresent()) {
//            User user = changeUser.get();
//            user.setUsername(usernameRequest);
//            userRepository.save(user);
//            return Optional.of(user);
//        }
//        return Optional.empty();
//    }

//    public User update(User user) {
//        return userRepository.save(user);
//    }

//    public String changeUsername(String usernameRequest, Long id) {
//        Optional<User> changeUser = userRepository.findById(id);
//        return userRepository.findById(id)
//                .map(username ->
//                        username.setUsername(usernameRequest))
//                .orElseThrow();
//    }
}
