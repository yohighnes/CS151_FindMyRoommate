package com.example.backend.service;

import com.example.backend.Common.*;
import com.example.backend.model.User;
import com.example.backend.model.UserPreference;

public interface IUserPreferenceService {
    UserPreference addUserPreference(User user, String bedTime, String loudness, String cleanliness, String houseHoldSize, String locationPreference, String roommateGenderPreference, String monthlyBudgetFrom, String monthLyBudgetTo);
    LocationPreferenceEnum convertLocationPreferenceToEnum(String locationPreference);
    RoommateGenderPreferenceEnum convertRoommateGenderPreferenceToEnum(String roommateGenderPreference);
    HouseHoldSizeEnum convertHouseHoldSizeToEnum(String houseHoldSize);
    BedTimeEnum convertBedTimeToEnum(String bedTime);
    CleanlinessEnum convertCleanlinessToEnum(String cleanliness);
    LoudnessEnum convertLoudnessToEnum(String loudness);
    String convertLoudnessToString(LoudnessEnum loudnessEnum);
    String convertCleanlinessToString(CleanlinessEnum cleanlinessEnum);
    String convertBedTimeToString(BedTimeEnum bedTimeEnum);
    String convertHouseHoldSizeToString(HouseHoldSizeEnum houseHoldSizeEnum);
    String convertRoommateGenderPreferenceToString(RoommateGenderPreferenceEnum roommateGenderPreferenceEnum);

}
