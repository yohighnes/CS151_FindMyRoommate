package com.example.backend.controller;

import com.example.backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private IUserService userService;

    @GetMapping("/register")
    public String registerUser(@RequestParam(name="firstName", defaultValue = "") String firstName,
                               @RequestParam(name="lastName", defaultValue = "") String lastName,
                               @RequestParam(name="usernamd", defaultValue = "") String username,
                               @RequestParam(name="password", defaultValue = "") String password,
                               @RequestParam(name="email", defaultValue = "") String email) {
        System.out.println("hi" + firstName);
        if(userService.registerUser(firstName, lastName, email, password, username) == null) {

        }
        return "Registered" + firstName;
    }
}
