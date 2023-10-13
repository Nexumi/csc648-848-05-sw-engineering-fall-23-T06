package com.orderowl.api.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class LoginController {

    @GetMapping("/LoginPage")
    public String showLoginForm(){
        return "LoginPage";
    }

    @PostMapping("/LoginPage")
    public String processLogin(){

        return "redirect:/DashboardPage";
    }
    @Autowired
    private LoginRepository userRepository;
}
