package com.example.ptbackend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.ptbackend.model.Project;
import com.example.ptbackend.model.User;

public interface ProjectRepo extends JpaRepository<Project,Integer>{
	
	@Override
	
	List<Project> findAll();


	
	
//	@Query(nativeQuery = true, 
//		    value = "SELECT * from loginuser join where project_id:1")
	List<Project> findById(int id);




	Project findByprojectname(String projectname);
	
	@Query(value = "select * from project where project.projectname = ?1", nativeQuery = true)
	List<Project> findProjectUsingNativeQuery(String userEmail);
	
//	
//	@Query(nativeQuery = true, 
//		       value = "SELECT * FROM projects WHERE Id = ?1")
//	@Query(nativeQuery = true, 
//    value = "SELECT * from loginuser join where id:1")
//	List<Project> findById(List<Integer> id);



//	Optional<Project> findAllById(long l);
	

}

