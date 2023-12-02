/**
 * This is the service layer of our spring boot application
 * It handles the interactions with the database
 */
package com.orderowl.api.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
     * Before saving the user in our database, the system shall receive the password
     * then encrypting the password. Once encrypted will save the encrypted password.
     * <p>
     * The next block of code will set the role for the user, "Personal" role is
     * set by default, while we will create a boolean entity to check whether
     * the user has checked the business account checkbox. If it is true, then
     * instead of Personal default account, we will change role to business
     * before saving
     *
     * @param registrationRequest This is the registration data that will be saved
     */
    public void registerUser(User registrationRequest) {

        String password = registrationRequest.getPassword();
        String encryptPass = passwordEncoder.encode(password);
        registrationRequest.setPassword(encryptPass);


        userRepository.save(registrationRequest);

    }


    /**
     * This will search the database using the email
     *
     * @param email This is the email parameter used for searching
     * @return This will return the list of users matching the email and password
     */
    public User searchUser(String email) {

        return userRepository.findByEmail(email).get();
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

    /**
     * @param email will be used to locate the email that is linked to the current user
     * @param pin   will hold the new user pin that is being created
     * @return will return the new pin that was created
     */
    public User newUserPin(String email, String pin) {

        var user = userRepository.findByEmail(email).orElseThrow();
        user.setPin(pin);
        return userRepository.save(user);
    }

}
