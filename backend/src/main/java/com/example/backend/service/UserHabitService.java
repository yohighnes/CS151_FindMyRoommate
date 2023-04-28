package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.model.UserHabit;
import com.example.backend.repository.UserHabitRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class UserHabitService implements IUserHabitService{

    @Autowired
    private UserHabitRepository userHabitRepository;

    @Autowired
    private UserRepository userRepository;
    @Override
    public UserHabit addUserHabit(User user, boolean smoke, boolean drink, boolean vape) {
        UserHabit userHabit = new UserHabit();
        userHabit.setUserName(user.getUserName());
        userHabit.setUser(user);
        userHabit.setDrink(drink);
        userHabit.setVape(vape);
        userHabit.setSmoke(smoke);

        return userHabitRepository.save(userHabit);
    }
}
