
package com.example.ptbackend.model;

import org.springframework.stereotype.Repository;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="userWithStatus")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserWithStatus {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String email;
	private String name;
	private String role;
	private int status = 0;
	
	
	public UserWithStatus(String email, String name, String role, int status) {
		super();
		this.email = email;
		this.name = name;
		this.role = role;
		this.status = status;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public int getStatus() {
		return status;
	}


	public void setStatus(int status) {
		this.status = status;
	}
	
	





	
	
	
}
	

