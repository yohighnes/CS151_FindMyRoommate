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
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;

@Controller
@CrossOrigin
@RequestMapping(path = "/users")
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
    @Autowired
    private UserHabitRepository userHabitRepository;
    @Autowired
    private UserEducationRepository userEducationRepository;
    @Autowired
    private UserPreferenceRepository userPreferenceRepository;

    @PostMapping(path = "/add")
    public @ResponseBody User addNewUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping(path = "/addUserProfileInfo")
    public @ResponseBody String addUserProfileInfo(
            @RequestBody Map<String, String> map) {

        String userName = map.get("username");
        boolean smoke = map.get("smoke").equals("1") ? false : true;
        boolean drink = map.get("drink").equals("1") ? false : true;
        boolean vape = map.get("vape").equals("1") ? false : true;

        String major = map.get("major");
        String yearInSchool = map.get("yearInSchool");
        Integer graduationYear = Integer.parseInt(map.get("graduationYear"));
        String linkedIn = map.get("linkedin");
        String instagram = map.get("instagram");
        String facebook = map.get("facebook");
        String github = map.get("github");
        String twitter = map.get("twitter");
        String bedTime = map.get("bedTime");
        String loudness = map.get("loudness");;
        String cleanliness = map.get("cleanliness");
        String houseHoldSize = map.get("householdSize");
        String roommateGenderPreference = map.get("genderPreference");
        String monthlyBudgetFrom = map.get("monthlyBudgetFrom");
        String monthlyBudgetTo = map.get("monthlyBudgetTo");
        String locationPreference = "NorthSanJose";
        User user = userRepository.findByUserName(userName);
        if(user.getUserEducation() == null && user.getUserHabit() == null && user.getUserPreference() == null && user.getUserSocialMedia() == null) {
            UserEducation userEducation = userEducationService.addUserEducation(user, major, yearInSchool, graduationYear);
            UserHabit userHabit = userHabitService.addUserHabit(user, smoke, drink, vape);
            UserSocialMedia userSocialMedia = userSocialMediaService.addUserSocialMedia(user, linkedIn, instagram, facebook, github, twitter);
            UserPreference userPreference = userPreferenceService.addUserPreference(user, bedTime, loudness, cleanliness, houseHoldSize, locationPreference, roommateGenderPreference, monthlyBudgetFrom, monthlyBudgetTo);

            user.setUserEducation(userEducation);
            user.setUserHabit(userHabit);
            user.setUserSocialMedia(userSocialMedia);
            user.setUserPreference(userPreference);
            return "Saved";
        } else {
            UserEducation userEducation = userEducationRepository.findByUserName(userName);
            userEducation.setUserName(userName);
            userEducation.setUser(user);
            userEducation.setMajor(major);
            userEducation.setGraduationYear(graduationYear);
            userEducation.setYearInSchool(userEducationService.convertLevelToEnum(yearInSchool));

            UserHabit userHabit = userHabitRepository.findByUserName(userName);
            userHabit.setUser(user);
            userHabit.setUserName(userName);
            userHabit.setDrink(drink);
            userHabit.setVape(vape);
            userHabit.setSmoke(smoke);

            UserSocialMedia userSocialMedia = userSocialMediaRepository.findByUserName(userName);
            userSocialMedia.setUser(user);
            userSocialMedia.setUserName(userName);
            userSocialMedia.setInstagram(instagram);
            userSocialMedia.setLinkedIn(linkedIn);
            userSocialMedia.setFacebook(facebook);
            userSocialMedia.setGithub(github);
            userSocialMedia.setTwitter(twitter);

            UserPreference userPreference = userPreferenceRepository.findByUserName(userName);
            userPreference.setUser(user);
            userPreference.setUserName(userName);
            userPreference.setLocationPreference(userPreferenceService.convertLocationPreference(locationPreference));
            userPreference.setRoommateGenderPreference(userPreferenceService.convertRoommateGenderPreference(roommateGenderPreference));
            userPreference.setHouseholdSize(userPreferenceService.convertHouseHoldSize(houseHoldSize));
            userPreference.setBedTime(userPreferenceService.convertBedTime(bedTime));
            userPreference.setMonthlyBudgetFrom(Integer.parseInt(monthlyBudgetFrom));
            userPreference.setMonthlyBudgetTo(Integer.parseInt(monthlyBudgetTo));
            userPreference.setCleanliness(userPreferenceService.convertCleanliness(cleanliness));
            userPreference.setLoudness(userPreferenceService.convertLoudness(loudness));

            user.setUserHabit(userHabit);
            user.setUserEducation(userEducation);
            user.setUserPreference(userPreference);
            user.setUserSocialMedia(userSocialMedia);

            userRepository.save(user);
            userEducationRepository.save(userEducation);
            userPreferenceRepository.save(userPreference);
            userHabitRepository.save(userHabit);
            userSocialMediaRepository.save(userSocialMedia);
            return "Updated";
        }
    }

    @GetMapping(path = "/user")
    public @ResponseBody User getUser(@RequestParam String emailOrUsername) {
        if(userRepository.findByUserName(emailOrUsername) == null) {
            return userRepository.findByEmail(emailOrUsername);
        }
        return userRepository.findByUserName(emailOrUsername);
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








