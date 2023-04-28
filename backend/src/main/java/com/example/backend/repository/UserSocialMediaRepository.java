package com.example.backend.repository;

import com.example.backend.model.User;
import com.example.backend.model.UserSocialMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserSocialMediaRepository extends JpaRepository<UserSocialMedia, Long> {
    // methods to perform CRUD operations on the database
    UserSocialMedia findByUserName(String userName);

}
