package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="user_socialMedia")
public class UserSocialMedia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, unique = true)
    private String userName;
    @Column
    private String linkedIn;
    @Column
    private String instagram;
    @JsonIgnore
    @OneToOne(mappedBy="userSocialMedia", cascade= CascadeType.ALL)
    private User user;
}
