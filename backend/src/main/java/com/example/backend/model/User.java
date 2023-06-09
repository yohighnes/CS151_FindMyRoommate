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
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String userName;

    @Column(nullable = false)
    private String stuId;

    @OneToOne(cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private UserHabit userHabit;

    @OneToOne(cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private UserEducation userEducation;

    @OneToOne(cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private UserSocialMedia userSocialMedia;

    @OneToOne(cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private UserPreference userPreference;

    public User() {
    }

    public User(Long id, String firstName, String lastName, String email, String password, String userName, String stuId, UserHabit userHabit, UserEducation userEducation, UserSocialMedia userSocialMedia, UserPreference userPreference) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.stuId = stuId;
        this.userHabit = userHabit;
        this.userEducation = userEducation;
        this.userSocialMedia = userSocialMedia;
        this.userPreference = userPreference;
    }
}


