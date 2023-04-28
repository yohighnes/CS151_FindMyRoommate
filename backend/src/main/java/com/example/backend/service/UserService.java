package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repository.UserHabitRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class UserService implements IUserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User registerUser(String firstName, String lastName, String email, String password, String username) {
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setName(username);
        return user;
    }

    @Override
    public boolean isValidPassword(String password) {
        return false;
    }
    @PostMapping(path = "/login")
    public String login(@RequestParam("email") String email, @RequestParam("password") String password) {
        User user = UserService.loginUser(email, password);
        if (user == null) {
            return "Email and/or password are incorrect.";
        } else {
            return "Login successful";
        }
    }

    public static User loginUser(String email, String password) {
        return null;
    }


}
