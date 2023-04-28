package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.model.UserHabit;


public interface IUserService {
    User registerUser(String firstName, String lastName, String email, String password, String username);
    boolean isValidPassword(String password);
}
