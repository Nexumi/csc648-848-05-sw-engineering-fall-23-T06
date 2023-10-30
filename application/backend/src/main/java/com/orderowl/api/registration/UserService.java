package com.orderowl.api.registration;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    public void registerUser(User registrationRequest) {

        userRepository.save(registrationRequest);
    }

    public List<User> searchUser(String email, String password){

        return userRepository.findByEmailAndPassword(email, password);
    }

    public boolean authUser(User userAuth){
        List<User> users = searchUser(userAuth.getEmail(), userAuth.getPassword());
        if (!users.isEmpty())
            return true;
        else
            return false;
    }
}
