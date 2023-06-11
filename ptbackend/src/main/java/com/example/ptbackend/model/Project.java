package com.example.ptbackend.model;


import java.util.ArrayList;



import java.util.List;
import org.springframework.stereotype.Repository;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="project")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Repository

public class Project {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="projectname",nullable=false)
	private String projectname;
	
	@Column(name="startdate",nullable=false)
	private String startdate;
	
	@Column(name="enddate",nullable=false)
	private String enddate;
	
	@Column(name="users",nullable=false)
	private List<String> users = new ArrayList<>();
	
	
	@Column(name="status",nullable=false)
	private int status = 0;
	
	
//	@OneToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL,mappedBy="project")
//	@PrimaryKeyJoinColumn
//	private User user;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProjectname() {
		return projectname;
	}

	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}

	public String getStartdate() {
		return startdate;
	}

	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}

	public String getEnddate() {
		return enddate;
	}

	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}

	public  List<String> getUsers() {
		return users;
	}

	public void setUsers(List<String> users) {
		this.users = users;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Project [id=" + id + ", projectname=" + projectname + ", startdate=" + startdate + ", enddate="
				+ enddate + ", projects=" + users + ", getId()=" + getId() + ", getProjectname()=" + getProjectname()
				+ ", getStartdate()=" + getStartdate() + ", getEnddate()=" + getEnddate() + ", getProjects()="
				+ getUsers() + "]";
	}
	


	public Project() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Project(String projectname, String startdate, String enddate, List<String> users) {
		super();
		this.projectname = projectname;
		this.startdate = startdate;
		this.enddate = enddate;
		this.users = users;
	}

//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}

	








}
	
	


