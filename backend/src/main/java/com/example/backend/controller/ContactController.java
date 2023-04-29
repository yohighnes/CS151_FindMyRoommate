package com.example.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ContactController {

    @Autowired
    private JavaMailSender mailSender;


    @GetMapping("/contactUs")
    public String showContactForm() {
        return "contact_form";
    }
    
    @PostMapping("/contactUs")
    public String submitContact(HttpServletRequest request) {
        String fullname = request.getParameter("fullname");
        String email = request.getParameter("email");
        String message = request.getParameter("message");

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("hoang.khanhnguyen2004@gmail.com") //using a random gmail to test
        message.setTo("enteryourowngmail.com"); //this is where we suppose to get the gmail


        String mailSubject = fullname + "has sent a message";
        String mailContent = "Sender Name" + fullname + "\n";
        mailContent += "Sender E-mail: " + email + "\n";
        mailContent += "Message: " + message + "\n";

        message.setSubject(mailSubject)
        message.setText(mailContent);

        mailSender.send(message);
        return "message";
    }
}
