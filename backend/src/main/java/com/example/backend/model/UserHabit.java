package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "user_habit")
public class UserHabit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private boolean smoke;
    @Column
    private boolean drink;
    @Column
    private boolean vape;
    @OneToOne(mappedBy="userHabit", cascade= CascadeType.ALL)
    private User user;

}
