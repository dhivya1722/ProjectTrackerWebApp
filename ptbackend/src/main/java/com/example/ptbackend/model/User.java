package com.example.ptbackend.model;


import java.util.List;


import org.springframework.stereotype.Repository;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="loginuser")
@Table(name="loginuser")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Repository

public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)


	private int id;
	
	@Column(name="email",nullable=false )
	private String email;
	
	@Column(name="password",nullable=false )
	private String password;
	
	@Column(name="name",nullable=false )
	private String name;
	
	
	@Column(name="role",nullable=false )
	private String role;
	
	
//	@OneToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
//	 @JoinTable(name = "user_projects",
//	 joinColumns= @JoinColumn(name="p_id",referencedColumnName = "id"),
//	 inverseJoinColumns = @JoinColumn(name = "u_id", referencedColumnName = "id"))
//	private Project project;
	
	

	public String getRole() {
		return role;
	}





	public void setRole(String role) {
		this.role = role;
	}





	public String getName() {
		return name;
	}





	public void setName(String name) {
		this.name = name;
	}





	public String getEmail() {
		return email;
	}





	public void setEmail(String email) {
		this.email = email;
	}




	public String getPassword() {
		return password;
	}




	
	public void setPassword(String password) {
		this.password = password;
	}




	
	public User(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	public User(String email, String password , String name) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
	}
	
	
	public User(String email, String password , String name,String role) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.role=role;
	}


	


	public User() {
		super();
		// TODO Auto-generated constructor stub
	}





	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", password=" + password + ", name=" + name + ", role=" + role
				+ "]";
	}





	public void setProject(Project project2) {
		// TODO Auto-generated method stub
		
	}





	
	
	
}
	

