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
        if(houseHoldSize.equals("One")) {
            return HouseHoldSizeEnum.ONE;
        } else if(houseHoldSize.equals("Two")) {
            return HouseHoldSizeEnum.TWO;
        } else if(houseHoldSize.equals("Three")) {
            return HouseHoldSizeEnum.THREE;
        } else {
            return HouseHoldSizeEnum.FOURPLUS;
        }
    }

    @Override
    public BedTimeEnum convertBedTime(String bedTime) {
        if(bedTime.equals("Nine")) {
            return BedTimeEnum.NINE;
        } else if(bedTime.equals("Ten")) {
            return BedTimeEnum.TEN;
        } else if(bedTime.equals("Eleven")) {
            return BedTimeEnum.ELEVEN;
        } else {
            return BedTimeEnum.TWELVEPLUS;
        }
    }

    @Override
    public CleanlinessEnum convertCleanliness(String cleanliness) {
        if(cleanliness.equals("Almost Jungle")) {
            return CleanlinessEnum.ALMOST_JUNGLE;
        } else if(cleanliness.equals("Lots of Stuff")) {
            return CleanlinessEnum.LOTS_OF_STUFF;
        } else if(cleanliness.equals("Mostly Tidy")) {
            return CleanlinessEnum.MOSTLY_TIDY;
        } else {
            return CleanlinessEnum.VERY_CLEAN;
        }
    }

    @Override
    public LoudnessEnum convertLoudness(String loudness) {
        if(loudness.equals("Mostly Quiet")) {
            return LoudnessEnum.MOSTLY_QUIET;
        } else if(loudness.equals("Occasionally Social")) {
            return LoudnessEnum.OCCASIONALLY_SOCIAL;
        } else if(loudness.equals("Often Loud")) {
            return LoudnessEnum.OFTEN_LOUD;
        } else {
            return LoudnessEnum.VERY_PARTY;
        }
    }

    @Override
    public UserPreference addUserPreference(User user, String bedTime, String loudness, String cleanliness, String houseHoldSize, String locationPreference, String roommateGenderPreference, String monthlyBudget) {
        UserPreference userPreference = new UserPreference();
        userPreference.setUser(user);
        userPreference.setUserName(user.getUserName());
        userPreference.setBedTime(convertBedTime(bedTime));
        userPreference.setLoudness(convertLoudness(loudness));
        userPreference.setLocationPreference(convertLocationPreference(locationPreference));
        userPreference.setRoommateGenderPreference(convertRoommateGenderPreference(roommateGenderPreference));
        userPreference.setHouseholdSize(convertHouseHoldSize(houseHoldSize));
        userPreference.setMonthlyBudget(Integer.parseInt(monthlyBudget));
        userPreference.setCleanliness(convertCleanliness(cleanliness));
        return userPreferenceRepository.save(userPreference);
    }

}
