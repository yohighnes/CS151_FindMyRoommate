package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name="user_education")
public class UserEducation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, unique = true)
    private String userName;
    @Column
    private String major;
    @Column
    private Enum yearInSchool;
    @Column
    private Integer graduationYear;
    @OneToOne(mappedBy="userEducation", cascade= CascadeType.ALL)
    private User user;
}
