package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    // getters and setters

    // public void setPassword(String password) {
    //     BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    //     this.password = passwordEncoder.encode(password);
    // }
}


