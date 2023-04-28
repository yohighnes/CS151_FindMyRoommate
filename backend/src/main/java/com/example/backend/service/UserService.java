package com.example.backend.service;

import com.example.backend.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService{
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
}
