package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/add")
    public @ResponseBody User addNewUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String email, @RequestParam String password) {

        User user = new User();
        user.setName(firstName + " " + lastName);
        user.setEmail(email);
        user.setPassword(password);
        return userRepository.save(user);
    }
    

    @GetMapping(path = "/all")
    public @ResponseBody Iterable < User > getAllUsers() {
        return userRepository.findAll();
    }

}



// @RestController
// public class UserController {

//     @Autowired
//     private IUserService userService;

//     @GetMapping("/register")
//     public String registerUser(@RequestParam(name="firstName", defaultValue = "") String firstName,
//                                @RequestParam(name="lastName", defaultValue = "") String lastName,
//                                @RequestParam(name="usernamd", defaultValue = "") String username,
//                                @RequestParam(name="password", defaultValue = "") String password,
//                                @RequestParam(name="email", defaultValue = "") String email) {
//         User user = userService.registerUser(firstName, lastName, email, password, username);

//         if(user == null) {
//             return "enter data";

//         }
//         return "Registered";
//     }
// }
