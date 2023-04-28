package com.example.backend.service;

import com.example.backend.Common.SchoolLevelEnum;
import com.example.backend.model.User;
import com.example.backend.model.UserEducation;
import com.example.backend.repository.UserEducationRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserEducationService implements IUserEducationService{
    @Autowired
    private UserEducationRepository userEducationRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public SchoolLevelEnum convertLevelToEnum(String yearInSchool) {
        if(yearInSchool.equals("Freshman")) {
            return SchoolLevelEnum.FRESHMAN;
        } else if(yearInSchool.equals("Sophomore")) {
            return SchoolLevelEnum.SOPHOMORE;
        } else if(yearInSchool.equals("Junior")) {
            return SchoolLevelEnum.JUNIOR;
        } else {
            return SchoolLevelEnum.SENIOR;
        }
    }

    public UserEducation addUserEducation(User user, String major, String yearInSchool, Integer graduationYear) {
        UserEducation userEducation = new UserEducation();
        userEducation.setUser(user);
        userEducation.setUserName(user.getUserName());
        userEducation.setMajor(major);
        userEducation.setGraduationYear(graduationYear);
        userEducation.setYearInSchool(convertLevelToEnum(yearInSchool));

        return userEducationRepository.save(userEducation);
    }
}
