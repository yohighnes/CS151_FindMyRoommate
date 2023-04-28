package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.IUserService;

import jakarta.servlet.http.HttpSession;

import java.util.HashMap;
import java.util.Map;

import com.example.backend.model.*;
import com.example.backend.repository.*;
import com.example.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/user")
public class UserController {
    @Autowired
    private IUserEducationService userEducationService;
    @Autowired
    private IUserHabitService userHabitService;
    @Autowired
    private IUserSocialMediaService userSocialMediaService;
    @Autowired
    private IUserPreferenceService userPreferenceService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserSocialMediaRepository userSocialMediaRepository;
    @PostMapping(path = "/add")
    public @ResponseBody User addNewUser(@RequestParam String firstName,
                                            @RequestParam String lastName, 
                                            @RequestParam String email, 
                                            @RequestParam String password,
                                            @RequestParam String userName, 
                                            @RequestParam String usernameStuId ) {

        User user = new User();
        user.setName(firstName + " " + lastName);
        user.setEmail(email);
        user.setPassword(password);

        user.setStuId(usernameStuId);
        user.setUserName(userName);

        return userRepository.save(user);
    }

    @PostMapping(path = "/addUserProfileInfo")
    public @ResponseBody String addUserProfileInfo(
            @RequestParam String userName, @RequestParam boolean smoke, @RequestParam boolean drink, @RequestParam boolean vape,
            @RequestParam String major, @RequestParam String yearInSchool, @RequestParam Integer graduationYear,
            @RequestParam String linkedIn, @RequestParam String instagram,
            @RequestParam String bedTime, @RequestParam String loudness, @RequestParam String cleanliness, @RequestParam String houseHoldSize,
            @RequestParam String roommateGenderPreference, @RequestParam String monthlyBudget, @RequestParam String locationPreference
            ) {
        User user = userRepository.findByUserName(userName);

        UserEducation userEducation = userEducationService.addUserEducation(user, major, yearInSchool, graduationYear);
        UserHabit userHabit = userHabitService.addUserHabit(user, smoke, drink, vape);
        UserSocialMedia userSocialMedia = userSocialMediaService.addUserSocialMedia(user, linkedIn, instagram);
        UserPreference userPreference = userPreferenceService.addUserPreference(user, bedTime, loudness, cleanliness, houseHoldSize, locationPreference, roommateGenderPreference, monthlyBudget);

        user.setUserEducation(userEducation);
        user.setUserHabit(userHabit);
        user.setUserSocialMedia(userSocialMedia);
        user.setUserPreference(userPreference);

        return "Saved";

    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable < User > getAllUsers() {
        return userRepository.findAll();
    }

    
    @PostMapping(path="/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> loginData, HttpSession session) {
            // Extract the username and password from the request body
            String email = loginData.get("email");
            String password = loginData.get("password");
    
            // Query the user table to check if the username and password match
            User user = userRepository.findByEmailAndPassword(email, password);
    
            if (user != null) {
                // If the username and password match, set a session variable and redirect to the profile page
                session.setAttribute("email", email);
                Map<String, String> response = new HashMap<>();
                response.put("message", "Login successful!");
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                // If the username and password don't match, return an error message
                Map<String, String> response = new HashMap<>();
                response.put("message", "Incorrect username or password");
                return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
            }
        }
    }








