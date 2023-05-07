package com.example.backend.service;

import com.example.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService{

    @Autowired
    public IUserPreferenceService userPreferenceService;
    @Override
    public User registerUser(String firstName, String lastName, String email, String password, String username) {
        User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(password);
        user.setUserName(username);
        return user;
    }

    @Override
    public boolean isValidPassword(String password) {
        return false;
    }

    @Override
    public double editDistance(String str1, String str2) {

        int n = str1.length(), m = str2.length();
        int[][] dp = new int [n + 1][m + 1];
        for (int i = 0; i <= n; i++)
        {
            for (int j = 0; j <= m; j++)
            {
                if (i == 0)
                {
                    dp[i][j] = j;
                }

                else if (j == 0)
                {
                    dp[i][j] = i;
                }

                else if (str1.charAt(i - 1) == str2.charAt(j - 1))
                {
                    dp[i][j] = dp[i - 1][j - 1];
                }

                else
                {
                    dp[i][j] = 1 + Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]);
                }
            }
        }

        int ans = dp[n][m];

        return ans;
    }

    @Override
    public String generateString(User user) {
        StringBuilder str = new StringBuilder();
        str.append(userPreferenceService.convertLoudnessToString(user.getUserPreference().getLoudness()));
        str.append(userPreferenceService.convertBedTimeToString(user.getUserPreference().getBedTime()));
        str.append(userPreferenceService.convertCleanlinessToString(user.getUserPreference().getCleanliness()));
        str.append(userPreferenceService.convertHouseHoldSizeToString(user.getUserPreference().getHouseholdSize()));
        str.append(userPreferenceService.convertRoommateGenderPreferenceToString(user.getUserPreference().getRoommateGenderPreference()));
        str.append(userPreferenceService.convertCleanlinessToString(user.getUserPreference().getCleanliness()));

        str.append(user.getUserHabit().isSmoke() == false ? "1" : "2");
        str.append(user.getUserHabit().isDrink() == false ? "1" : "2");
        str.append(user.getUserHabit().isVape() == false ? "1" : "2");

        return str.toString();
    }
}
