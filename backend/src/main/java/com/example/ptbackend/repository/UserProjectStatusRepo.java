package com.example.ptbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ptbackend.model.UserProjectStatus;

public interface UserProjectStatusRepo  extends JpaRepository<UserProjectStatus,Integer> {
	
	
	@Override
	List<UserProjectStatus> findAll();
	
	List<UserProjectStatus> findByemail(Object email);
	
	List<UserProjectStatus> findByprojectid(Object projectid);
	
	UserProjectStatus findByEmailAndProjectname(Object email , Object projectname);

	List<UserProjectStatus> findByprojectname(String projectname);
	
	

}
