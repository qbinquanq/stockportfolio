package com.microforce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.microforce.models.User;
import com.microforce.service.UserService;

@Controller
@RequestMapping(path="/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<HttpStatus> addNewUser(@RequestBody User user) {
		System.out.print(user);
		this.userService.saveAndFlush(user);	
		return ResponseEntity.ok(HttpStatus.OK);
	}
}
