package com.microforce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microforce.models.User;
import com.microforce.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	
	public void saveAndFlush(User user) {		
		userRepo.save(user);
	}
	
	
}
