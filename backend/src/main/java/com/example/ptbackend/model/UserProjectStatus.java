package com.example.ptbackend.model;

import org.springframework.stereotype.Repository;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="userprojectstatus")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Repository
public class UserProjectStatus {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)


	private int id;
	
	@Column(name="email",nullable=false )
	private String email;
	
	@Column(name="projectid",nullable=false )
	private int projectid;
	
	@Column(name="projectname",nullable=false )
	private String name;
	
	
	@Column(name="status",nullable=false )
	private int projectStatus;


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public int getProjectId() {
		return projectid;
	}


	public void setProjectId(int projectId) {
		this.projectid = projectId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getProjectStatus() {
		return projectStatus;
	}


	public void setProjectStatus(int projectStatus) {
		this.projectStatus = projectStatus;
	}


	public UserProjectStatus(String email, int projectid, String name, int projectStatus) {
		super();
		this.email = email;
		this.projectid = projectid;
		this.name = name;
		this.projectStatus = projectStatus;
	}


	public UserProjectStatus() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
