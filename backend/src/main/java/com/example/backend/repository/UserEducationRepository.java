package com.example.backend.repository;

import com.example.backend.model.UserEducation;
import com.example.backend.model.UserHabit;
import com.example.backend.model.UserSocialMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserEducationRepository extends JpaRepository<UserEducation, Long> {
    // methods to perform CRUD operations on the database
    UserEducation findByUserName(String userName);

}
