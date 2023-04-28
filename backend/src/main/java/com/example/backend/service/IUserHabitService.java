package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.model.UserHabit;

public interface IUserHabitService {
    UserHabit addUserHabit(User user, boolean smoke, boolean drink, boolean vape);
}
