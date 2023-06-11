package com.example.ptbackend.controller;

import java.util.ArrayList;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.ptbackend.model.Project;
import com.example.ptbackend.model.User;
import com.example.ptbackend.model.UserProjectStatus;
import com.example.ptbackend.repository.ProjectRepo;
import com.example.ptbackend.repository.UserProjectStatusRepo;
import com.example.ptbackend.repository.UserRepo;

import lombok.AllArgsConstructor;


@RestController
@AllArgsConstructor
@RequestMapping(value="/user")
@CrossOrigin(origins="http://localhost:4200")



public class ProjectController {
	
	
	
	
	@Autowired
	private UserRepo userrepo;
	
	@Autowired
	private ProjectRepo projectrepo;
	
	@Autowired
	private UserProjectStatusRepo userProjectStatusRepo;
	
	
	@GetMapping("/getallproject")
	public List<Project>getAllProjects(){
		System.out.println("received successfully");
		
		List<Project> p = projectrepo.findProjectUsingNativeQuery("project7");
		
		System.out.println(p);
		
//		List<User> p = 
		
		
		return projectrepo.findAll();
	}
	
	
	@GetMapping("/getprojectforuser")
	public List<Project> getProjectForUser(String useremail) {
		
		List<UserProjectStatus> userProjectsStatus = userProjectStatusRepo.findByemail(useremail);
		int projectsCount = userProjectsStatus.size();
		
		List<Project> userProjects= new ArrayList<Project>();
		for(int index=0 ;index<projectsCount; index++){ 
			UserProjectStatus projectStatus = userProjectsStatus.get(index);
			Project project = projectrepo.findByprojectname(projectStatus.getName());
			project.setStatus(projectStatus.getProjectStatus());
	        userProjects.add(project);
	    } 
		
		return userProjects;
	}
	
	
	
//	
//	@RequestMapping(method = RequestMethod.POST, value = "assignproject")
//	public Project assignProject(@RequestBody AssignProject assignproject) {
//		return projectrepo.save(assignproject.getProject());
//	}
	
	
	
	
	
	
	
	
	
	
    @GetMapping("/getallprojects")
	
	public ResponseEntity<List<Project>> getAllProjectsByid(@RequestParam int id){
		
		return new ResponseEntity<List<Project>>(projectrepo.findById(id),HttpStatus.OK);
		
	   
	
	}
    

//    @GetMapping("/getalluserproject")
//	
//      public Optional<ResponseEntity<List<Project>>> getAllUserProjectsByid(@RequestParam int id){
//		
//		return Optional.of(new ResponseEntity<List<Project>>(HttpStatus.OK));
//	   
//   	}

	
   
	
	

//			
////			Optional<Project> project = projectrepo.findById((long) 1);
////			for userId in Users {
////			    
////			 for( long userId : userrepo) {
////				 for (int i = 0; i < User.size(); i++)
////				userrepo.findById( long userId);
////			}
//			

	
	
//	@RequestMapping(method = RequestMethod.POST, value = "signup")
//	public ResponseEntity<?>signup(User newUser){
//		
//		System.out.println(newUser);
//		User existingUser=userrepo.findByemail(newUser.getEmail());
//		if(existingUser != null) {
//			System.out.println("register failure");
//			
//			
////			 Optional <Project> project = projectrepo.findById((long) 1);
//////
////////			for userId in Users 
////			  
//////			 	for (int i = 0; i < User.size(); i++) {
//////			 	userrepo.findById(userid);
//////
//////			
////////			 	}
//
//			return (ResponseEntity<?>) ResponseEntity.internalServerError();
//		}
//	
//
//		else {
//			System.out.println("register successfull");
//			System.out.println(newUser);
//			userrepo.save(newUser);
//			System.out.println("user added");
//    
//   
//			List<Integer> userList = new ArrayList<>();
//			userList.add(1);
//			userList.add(2);
//			
//			for (int i = 0; i < userList.size(); i++) {
//			    System.out.println(userList.get(i));
//			
//			
//			Project newProject = new Project(2,"Project tracking","7/22/23","7/30/23",userList);
//			
//			
//			
//			
//			projectrepo.save(newProject);	
//			userrepo.save(newUser);
//			}
//			
//			return ResponseEntity.ok(newUser);
//		}
//	}
	
	@RequestMapping(method = RequestMethod.POST, value = "addproject")
	public ResponseEntity<?> addproject(Project newProject){
		
		System.out.println(newProject);
		Project existingProject=projectrepo.findByprojectname(newProject.getProjectname());
		if(existingProject != null) {
			System.out.println("register failure");
			
			

			
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
		else {
			System.out.println("register successfull");
			System.out.println(newProject);
			List<Integer> projects = new ArrayList<>();
//			userList.add(1);
//			userList.add(2);
//			
			for (int i = 0; i < projects.size(); i++) {
			    System.out.println(projects.get(i));
			
			}
			projectrepo.save(newProject);
			
			Project storedProject = projectrepo.findByprojectname(newProject.getProjectname());
			int projectId = storedProject.getId();
			
			List<String> user = newProject.getUsers();
			
			int userCount = user.size();
			System.out.println(user);
			//String email, String projectid, String name, int projectStatus)
			for(int index=0;index<userCount;index++){  
				String userEmail = user.get(index);
				UserProjectStatus userProjectSts = new UserProjectStatus(userEmail, projectId , newProject.getProjectname() , 0);
				userProjectStatusRepo.save(userProjectSts);
		    } 
			
			
			
			projectrepo.save(newProject);
			System.out.println("user added");
			
			return ResponseEntity.ok(newProject);
		}
	}
	}




