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
    public LocationPreferenceEnum convertLocationPreferenceToEnum(String locationPreference) {
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
    public RoommateGenderPreferenceEnum convertRoommateGenderPreferenceToEnum(String roommateGenderPreference) {
        if(roommateGenderPreference.equals("Males")) {
            return RoommateGenderPreferenceEnum.MALES;
        } else if(roommateGenderPreference.equals("Females")) {
            return RoommateGenderPreferenceEnum.FEMALES;
        } else {
            return RoommateGenderPreferenceEnum.ALLGENDERS;
        }
    }


    @Override
    public HouseHoldSizeEnum convertHouseHoldSizeToEnum(String houseHoldSize) {
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
    public BedTimeEnum convertBedTimeToEnum(String bedTime) {
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
    public CleanlinessEnum convertCleanlinessToEnum(String cleanliness) {
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
    public LoudnessEnum convertLoudnessToEnum(String loudness) {
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
    public String convertLoudnessToString(LoudnessEnum loudnessEnum) {
        if(loudnessEnum.toString().equals("MOSTLY_QUIET")) {
            return "1";
        } else if(loudnessEnum.toString().equals("OCCASIONALLY_SOCIAL")) {
            return "2";
        } else if(loudnessEnum.toString().equals("OFTEN_LOUD")) {
            return "3";
        } else {
            return "4";
        }
    }

    @Override
    public String convertCleanlinessToString(CleanlinessEnum cleanlinessEnum) {
        if(cleanlinessEnum.toString().equals("ALMOST_JUNGLE")) {
            return "1";
        } else if(cleanlinessEnum.toString().equals("LOTS_OF_STUFF")) {
            return "2";
        } else if(cleanlinessEnum.toString().equals("MOSTLY_TIDY")) {
            return "3";
        } else {
            return "4";
        }
    }

    @Override
    public String convertBedTimeToString(BedTimeEnum bedTimeEnum) {
        if(bedTimeEnum.toString().equals("NINE")) {
            return "1";
        } else if(bedTimeEnum.toString().equals("TEN")) {
            return "2";
        } else if(bedTimeEnum.toString().equals("ELEVEN")) {
            return "3";
        } else {
            return "4";
        }
    }

    @Override
    public String convertHouseHoldSizeToString(HouseHoldSizeEnum houseHoldSizeEnum) {
        if(houseHoldSizeEnum.toString().equals("ONE")) {
            return "1";
        } else if(houseHoldSizeEnum.toString().equals("TWO")) {
            return "2";
        } else if(houseHoldSizeEnum.toString().equals("THREE")) {
            return "3";
        } else {
            return "4";
        }
    }

    @Override
    public String convertRoommateGenderPreferenceToString(RoommateGenderPreferenceEnum roommateGenderPreferenceEnum) {
        if(roommateGenderPreferenceEnum.toString().equals("MALES")) {
            return "1";
        } else if(roommateGenderPreferenceEnum.toString().equals("FEMALES")) {
            return "2";
        } else {
            return "3";
        }
    }

    @Override
    public UserPreference addUserPreference(User user, String bedTime, String loudness, String cleanliness, String houseHoldSize, String locationPreference, String roommateGenderPreference, String monthlyBudgetFrom, String monthlyBudgetTo) {
        UserPreference userPreference = new UserPreference();
        userPreference.setUser(user);
        userPreference.setUserName(user.getUserName());
        userPreference.setBedTime(convertBedTimeToEnum(bedTime));
        userPreference.setLoudness(convertLoudnessToEnum(loudness));
        userPreference.setLocationPreference(convertLocationPreferenceToEnum(locationPreference));
        userPreference.setRoommateGenderPreference(convertRoommateGenderPreferenceToEnum(roommateGenderPreference));
        userPreference.setHouseholdSize(convertHouseHoldSizeToEnum(houseHoldSize));
        userPreference.setMonthlyBudgetFrom(Integer.parseInt(monthlyBudgetFrom));
        userPreference.setMonthlyBudgetTo(Integer.parseInt(monthlyBudgetTo));
        userPreference.setCleanliness(convertCleanlinessToEnum(cleanliness));
        return userPreferenceRepository.save(userPreference);
    }

}
