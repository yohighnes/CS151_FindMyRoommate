package com.example.backend.service;

import com.example.backend.Common.SchoolLevelEnum;
import com.example.backend.model.User;
import com.example.backend.model.UserEducation;

public interface IUserEducationService {
    SchoolLevelEnum convertLevelToEnum(String yearInSchool);
    UserEducation addUserEducation(User user, String major, String yearInSchool, Integer graduationYear);

}
