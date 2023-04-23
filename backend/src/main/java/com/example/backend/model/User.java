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
}


// @Data
// @Entity
// @Table(name="users")
// public class User {

//     @Id
//     @GeneratedValue
//     @Column(name = "userId")
//     private Integer id;

//     @Column(name = "username")
//     private String username;

//     @Column(name = "password")
//     private String password;

//     @Column(name = "email")
//     private String email;
// }
