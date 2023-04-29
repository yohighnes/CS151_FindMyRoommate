package com.example.backend.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
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
        String messageText = request.getParameter("message");

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom("hoang.khanhnguyen2004@gmail.com");
        mailMessage.setTo("enteryourowngmail.com");

        String mailSubject = fullname + " has sent a message";
        String mailContent = "Sender Name: " + fullname + "\n";
        mailContent += "Sender E-mail: " + email + "\n";
        mailContent += "Message: " + messageText + "\n";

        mailMessage.setSubject(mailSubject);
        mailMessage.setText(mailContent);

        mailSender.send(mailMessage);
        return "message";
    }
}
