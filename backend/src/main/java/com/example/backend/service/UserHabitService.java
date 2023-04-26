package com.example.backend.service;

import com.example.backend.model.UserHabit;
import com.example.backend.repository.UserHabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

@Service
public class UserHabitService implements IUserHabitService{
    @Autowired
    private UserHabitRepository userHabitRepository;

}
