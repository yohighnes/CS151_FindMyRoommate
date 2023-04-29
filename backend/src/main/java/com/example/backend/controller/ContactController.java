package com.example.backend.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

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
        mailMessage.setFrom("hoangnguyenalt@gmail.com");
        mailMessage.setTo("uchiha.kamui2004@gmail.com");

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
