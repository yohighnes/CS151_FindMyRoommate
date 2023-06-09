package com.example.backend.model;

import com.example.backend.Common.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Table(name="user_preference")
@Entity
public class UserPreference {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, unique = true)
    private String userName;
    @Column
    private CleanlinessEnum cleanliness;
    @Column
    private BedTimeEnum bedTime;
    @Column
    private LoudnessEnum loudness;
    @Column
    private HouseHoldSizeEnum householdSize;
    @Column
    private RoommateGenderPreferenceEnum roommateGenderPreference;
    @Column
    private Integer monthlyBudgetFrom;
    @Column
    private Integer monthlyBudgetTo;
    @Column
    private LocationPreferenceEnum locationPreference;
    @JsonIgnore
    @OneToOne(mappedBy="userPreference", cascade= CascadeType.ALL)
    private User user;
}
