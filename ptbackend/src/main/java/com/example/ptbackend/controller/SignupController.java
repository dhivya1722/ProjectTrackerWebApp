package com.example.ptbackend.controller;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RestController;


import com.example.ptbackend.model.User;
import com.example.ptbackend.repository.UserRepo;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping(value="/user")
@CrossOrigin(origins="http://localhost:4200")
public class SignupController {
	
	
	@Autowired
	private UserRepo userrepo;
	
	

	
	@RequestMapping(method = RequestMethod.POST, value = "signup")
	public ResponseEntity<?> signup(User newUser){
		
		System.out.println(newUser);
		User existingUser=userrepo.findByemail(newUser.getEmail());
		if(existingUser != null) {
			System.out.println("register failure");
			
			

			
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
		else {
			System.out.println("register successfull");
			System.out.println(newUser);
			userrepo.save(newUser);
			System.out.println("user added");		
			return ResponseEntity.ok(newUser);
		}
	}
}

