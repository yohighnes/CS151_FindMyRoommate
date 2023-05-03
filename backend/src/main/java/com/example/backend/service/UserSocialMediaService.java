package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.model.UserSocialMedia;
import com.example.backend.repository.UserRepository;
import com.example.backend.repository.UserSocialMediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class UserSocialMediaService implements IUserSocialMediaService{

    @Autowired
    private UserSocialMediaRepository userSocialMediaRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserSocialMedia addUserSocialMedia(User user, String linkedIn, String instagram, String facebook, String github, String twitter) {
        UserSocialMedia userSocialMedia = new UserSocialMedia();
        userSocialMedia.setUserName(user.getUserName());
        userSocialMedia.setUser(user);
        userSocialMedia.setInstagram(instagram);
        userSocialMedia.setLinkedIn(linkedIn);
        userSocialMedia.setFacebook(facebook);
        userSocialMedia.setGithub(github);
        userSocialMedia.setTwitter(twitter);
        return userSocialMediaRepository.save(userSocialMedia);
    }
}
