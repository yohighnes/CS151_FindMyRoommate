package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.model.UserSocialMedia;

public interface IUserSocialMediaService {
    UserSocialMedia addUserSocialMedia(User user, String linkedIn, String instagram);
}
