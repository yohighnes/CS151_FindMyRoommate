package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@CrossOrigin
public class EmailController {
    @Autowired
    private JavaMailSender mailSender;

    @PostMapping(path = "/contactUs")
    public @ResponseBody String sendEmail(@RequestBody Map<String, String> emailInfo) {
        String email = emailInfo.get("email");
        String name = emailInfo.get("name");
        String to = "findmyroommate@gmail.com";
        String text = emailInfo.get("text");

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(email);
        message.setTo(to);
        message.setSubject("You've received a new feedback from " + name);
        message.setText(name + "'s email is " + email + " and below is the content of the email:\n" + text);

        mailSender.send(message);

        return "Sent";
    }
}
