
// package com.example.backend.controller;

// import com.example.backend.model.User;
// import com.example.backend.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.ResponseBody;

// @RestController
// @RequestMapping(path = "/user")
// public class UserController {

//     @Autowired
//     private UserRepository userRepository;

//     @PostMapping(path = "/add")
//     public @ResponseBody User addNewUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String email, @RequestParam String password) {

//         User user = new User();
//         user.setName(firstName + " " + lastName);
//         user.setEmail(email);
//         user.setPassword(password);
//         return userRepository.save(user);
//     }

//     @GetMapping(path = "/all")
//     public @ResponseBody Iterable<User> getAllUsers() {
//         return userRepository.findAll();
//     }

//     @GetMapping(path = "/login")
//     public ResponseEntity<String> login() {
//         Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//         if (auth.isAuthenticated()) {
//             return ResponseEntity.ok("Login successful!");
//         } else {
//             return ResponseEntity.badRequest().body("Invalid email or password.");
//         }
//     }
// }





package com.example.backend.controller;

// import java.util.Map;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping(path = "/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

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

    // @PostMapping(path = "/login")
    // public String login(@RequestParam("email") String email, @RequestParam("password") String password) {
    //     User user = UserService.loginUser(email, password);
    //     if (user == null) {
    //         return "Email and/or password are incorrect.";
    //     } else {
    //         return "Login successful";
    //     }
    // }
    


    
     
// GetMapping   
// public string login(){
//     return"login";
// }





