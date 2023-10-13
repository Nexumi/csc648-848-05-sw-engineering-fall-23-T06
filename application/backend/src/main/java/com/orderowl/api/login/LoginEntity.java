package com.orderowl.api.login;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
public class LoginEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String emailID;
    private String passwordID;

    public LoginEntity(String passwordID, String emailID){
        this.emailID = emailID;
        this.passwordID = passwordID;
    }

    public  LoginEntity(){
    }
    public Long getID() {
        return id;
    }
    public void setID(Long id){
        this.id = id;
    }
    public String getEmailID(){
        return emailID;
    }
    public void setEmailID(String emailID){
        this.emailID = emailID;
    }

    public String getPasswordID(){
        return passwordID;
    }
    public void setPasswordID(){
        this.passwordID = passwordID;
    }

}
