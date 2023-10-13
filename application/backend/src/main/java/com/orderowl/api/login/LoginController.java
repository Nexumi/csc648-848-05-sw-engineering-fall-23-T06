/*
package com.orderowl.api.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/login")
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/LoginPage")
    public String showLoginForm(){
        return "LoginPage";
    }

    @PostMapping("/LoginPage")
    public String processLogin(){

        return "redirect:/DashboardPage";
    }

}
*/
