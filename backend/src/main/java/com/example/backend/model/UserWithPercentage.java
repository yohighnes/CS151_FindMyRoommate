package com.example.backend.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserWithPercentage extends User{

    Double percentage;

    public UserWithPercentage(Long id, String firstName, String lastName, String email, String password, String userName, String stuId, UserHabit userHabit, UserEducation userEducation, UserSocialMedia userSocialMedia, UserPreference userPreference, Double percentage) {
        super( id,  firstName,  lastName,  email, password,  userName,  stuId,  userHabit, userEducation,  userSocialMedia, userPreference);
        this.percentage = percentage;
    }
}
