package com.example.backend.service;

import com.example.backend.Common.*;
import com.example.backend.model.User;
import com.example.backend.model.UserPreference;
import com.example.backend.repository.UserPreferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class UserPreferenceService implements IUserPreferenceService {
    @Autowired
    private UserPreferenceRepository userPreferenceRepository;

    @Override
    public LocationPreferenceEnum convertLocationPreference(String locationPreference) {
        if(locationPreference.equals("NorthSanJose")) {
            return LocationPreferenceEnum.NORTHSANJOSE;
        } else if(locationPreference.equals("SouthSanJose")) {
            return LocationPreferenceEnum.SOUTHSANJOSE;
        } else if(locationPreference.equals("EastSanJose")) {
            return LocationPreferenceEnum.EASTSANJOSE;
        } else {
            return LocationPreferenceEnum.WESTSANJOSE;
        }
    }

    @Override
    public RoommateGenderPreferenceEnum convertRoommateGenderPreference(String roommateGenderPreference) {
        if(roommateGenderPreference.equals("Males")) {
            return RoommateGenderPreferenceEnum.MALES;
        } else if(roommateGenderPreference.equals("Females")) {
            return RoommateGenderPreferenceEnum.FEMALES;
        } else {
            return RoommateGenderPreferenceEnum.ALLGENDERS;
        }
    }


    @Override
    public HouseHoldSizeEnum convertHouseHoldSize(String houseHoldSize) {
        if(houseHoldSize.equals("1")) {
            return HouseHoldSizeEnum.ONE;
        } else if(houseHoldSize.equals("2")) {
            return HouseHoldSizeEnum.TWO;
        } else if(houseHoldSize.equals("3")) {
            return HouseHoldSizeEnum.THREE;
        } else {
            return HouseHoldSizeEnum.FOURPLUS;
        }
    }

    @Override
    public BedTimeEnum convertBedTime(String bedTime) {
        if(bedTime.equals("1")) {
            return BedTimeEnum.NINE;
        } else if(bedTime.equals("2")) {
            return BedTimeEnum.TEN;
        } else if(bedTime.equals("3")) {
            return BedTimeEnum.ELEVEN;
        } else {
            return BedTimeEnum.TWELVEPLUS;
        }
    }

    @Override
    public CleanlinessEnum convertCleanliness(String cleanliness) {
        if(cleanliness.equals("1")) {
            return CleanlinessEnum.ALMOST_JUNGLE;
        } else if(cleanliness.equals("2")) {
            return CleanlinessEnum.LOTS_OF_STUFF;
        } else if(cleanliness.equals("3")) {
            return CleanlinessEnum.MOSTLY_TIDY;
        } else {
            return CleanlinessEnum.VERY_CLEAN;
        }
    }

    @Override
    public LoudnessEnum convertLoudness(String loudness) {
        if(loudness.equals("1")) {
            return LoudnessEnum.MOSTLY_QUIET;
        } else if(loudness.equals("2")) {
            return LoudnessEnum.OCCASIONALLY_SOCIAL;
        } else if(loudness.equals("3")) {
            return LoudnessEnum.OFTEN_LOUD;
        } else {
            return LoudnessEnum.VERY_PARTY;
        }
    }

    @Override
    public UserPreference addUserPreference(User user, String bedTime, String loudness, String cleanliness, String houseHoldSize, String locationPreference, String roommateGenderPreference, String monthlyBudgetFrom, String monthlyBudgetTo) {
        UserPreference userPreference = new UserPreference();
        userPreference.setUser(user);
        userPreference.setUserName(user.getUserName());
        userPreference.setBedTime(convertBedTime(bedTime));
        userPreference.setLoudness(convertLoudness(loudness));
        userPreference.setLocationPreference(convertLocationPreference(locationPreference));
        userPreference.setRoommateGenderPreference(convertRoommateGenderPreference(roommateGenderPreference));
        userPreference.setHouseholdSize(convertHouseHoldSize(houseHoldSize));
        userPreference.setMonthlyBudgetFrom(Integer.parseInt(monthlyBudgetFrom));
        userPreference.setMonthlyBudgetTo(Integer.parseInt(monthlyBudgetTo));
        userPreference.setCleanliness(convertCleanliness(cleanliness));
        return userPreferenceRepository.save(userPreference);
    }

}
