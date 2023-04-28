package com.example.backend.repository;

import com.example.backend.model.UserPreference;
import com.example.backend.model.UserSocialMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserPreferenceRepository extends JpaRepository<UserPreference, Long> {
    // methods to perform CRUD operations on the database
    UserPreference findByUserName(String userName);
}


