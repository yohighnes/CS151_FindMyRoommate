package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.model.UserHabit;
import com.example.backend.repository.UserHabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/user")
public class UserHabitController {
    @Autowired
    private UserHabitRepository userHabitRepository;

    @PostMapping(path = "/addUserHabit")
    public @ResponseBody UserHabit addUserHabit(@RequestParam String username, @RequestParam boolean smoke, @RequestParam boolean drink, @RequestParam boolean vape) {

        UserHabit userHabit = new UserHabit();

        userHabit.setDrink(drink);
        userHabit.setVape(vape);
        userHabit.setSmoke(smoke);

        return userHabitRepository.save(userHabit);
    }

}
