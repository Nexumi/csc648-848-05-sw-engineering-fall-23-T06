package com.orderowl.api.login;

import org.springframework.beans.factory.annotation.Autowired;

public class LoginService {

    @Autowired
    private LoginRepository userRepository;
}
