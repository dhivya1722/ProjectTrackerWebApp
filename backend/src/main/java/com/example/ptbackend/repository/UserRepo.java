package com.example.ptbackend.repository;

import java.util.List;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.ptbackend.model.Project;
import com.example.ptbackend.model.User;




public interface UserRepo extends JpaRepository<User,Integer>{
	
	

	User findByemail(Object email);
	@Override
	List<User> findAll();
	
	List<User> findByRole(String role);

	

	
	
	
	
	
//	List<User> getAllUsersByRole(String role);
	
	

//	@Query("select u from loginuser u where u.id=?1")
//	List<User> findById(int id);
	
	//@Query("select lu from loginuser lu where lu.role=?1")
	//@Query(value = "SELECT * FROM loginuser where role = ?1", nativeQuery = true)
	//List<User> findByRole(String role);
//	


	

	
	


	
	
	
	
	

	
	
	
	


}
