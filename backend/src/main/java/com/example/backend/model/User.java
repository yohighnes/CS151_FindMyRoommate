package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue
    @Column(name = "userId")
    private Integer id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;
}
