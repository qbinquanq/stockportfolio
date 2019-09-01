package com.microforce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microforce.models.User;


public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);
}
