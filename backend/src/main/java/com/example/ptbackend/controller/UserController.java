package com.example.ptbackend.controller;


import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RestController;

import com.example.ptbackend.model.Project;
import com.example.ptbackend.model.User;
import com.example.ptbackend.model.UserProjectStatus;
import com.example.ptbackend.model.UserWithStatus;
import com.example.ptbackend.repository.UserProjectStatusRepo;
import com.example.ptbackend.repository.UserRepo;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(value="/user")
@CrossOrigin(origins="http://localhost:4200")
@AllArgsConstructor
public class UserController {

	
	
	@Autowired
	private UserRepo userrepo;
	
	@Autowired
	private UserProjectStatusRepo userProjectStatusRepo;

	
	@GetMapping("/getallusers")
	public List<User>getAllUsers(){
		System.out.println("received successfully");
		return userrepo.findByRole("user");
	
	}
	@GetMapping("/getalladmins")
	public List<User>getAllAdmins(){
		System.out.println("received successfully");
		return userrepo.findByRole("admin");
	
	}
	
//	@GetMapping("/getallusers")
//	
//	public ResponseEntity<List<User>> getAllUsersByRole(@RequestParam String role){
//		
//		return new ResponseEntity<List<User>>(userrepo.findByRole(role),HttpStatus.OK);
//	   
//	
//	}
//	
//	
//  @GetMapping("/getalluser")
//	
// 	public ResponseEntity<List<User>> getAllUsersByid(@RequestParam int id){
// 		
// 		return new ResponseEntity<List<User>>(userrepo.findById(id),HttpStatus.OK);
// 	   
// 	
// 	}
	
	
	
  

	
	
	
	
	
	
	@RequestMapping(method = RequestMethod.GET, value = "loginuser")
	public ResponseEntity<?> loginuser( User userData){
		System.out.println(userData.getEmail());
		System.out.println(userData.getPassword());
		System.out.println(userData);
		User existingUser=userrepo.findByemail(userData.getEmail());
		System.out.println(existingUser.getPassword());
		if(existingUser.getPassword().equals(userData.getPassword())&&(existingUser.getRole().equals(userData.getRole()) )){
			System.out.println("Successfully  logged in");
			return ResponseEntity.ok(existingUser);
		}
		System.out.println("Login failed");
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}

	@GetMapping("/getuserforproject")
	public List<UserWithStatus> getUserForProject(String projectname) {
		
		List<UserProjectStatus> userProjectsStatus = userProjectStatusRepo.findByprojectname(projectname);
		int usersCount = userProjectsStatus.size();
		
		List<UserWithStatus> users= new ArrayList<UserWithStatus>();
		for(int index=0 ;index<usersCount; index++){  
			UserProjectStatus projectStatus = userProjectsStatus.get(index);
			User user = userrepo.findByemail(projectStatus.getEmail());
			UserWithStatus userWithStatus = new UserWithStatus(user.getEmail() , user.getName() , user.getRole() , projectStatus.getStatus());;
//			userWithStatus.setStatus(projectStatus.getProjectStatus());
	        users.add(userWithStatus);
	    }
		
		return users;
	}
	

}





