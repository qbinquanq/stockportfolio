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
		
		this.userService.saveNewUser(user);	
		return ResponseEntity.ok(HttpStatus.OK);
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<?> userLogin(@RequestBody User user){
		User getuser = this.userService.findUser(user.getEmail(), user.getPassword());
		if(getuser == null) {
			return new ResponseEntity<>(
				"Email or Password is not valid",
				HttpStatus.NOT_FOUND
			);
		}
		getuser.setToken("fake-jwt-token");
		return new ResponseEntity<>(
				getuser, HttpStatus.OK
		);
	}
	
}
