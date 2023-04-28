package com.example.backend.service;

import com.example.backend.Common.*;
import com.example.backend.model.User;
import com.example.backend.model.UserPreference;

public interface IUserPreferenceService {
    UserPreference addUserPreference(User user, String bedTime, String loudness, String cleanliness, String houseHoldSize, String locationPreference, String roommateGenderPreference, String monthlyBudget);
    LocationPreferenceEnum convertLocationPreference(String locationPreference);
    RoommateGenderPreferenceEnum convertRoommateGenderPreference(String roommateGenderPreference);
    HouseHoldSizeEnum convertHouseHoldSize(String houseHoldSize);
    BedTimeEnum convertBedTime(String bedTime);
    CleanlinessEnum convertCleanliness(String cleanliness);
    LoudnessEnum convertLoudness(String loudness);
}
