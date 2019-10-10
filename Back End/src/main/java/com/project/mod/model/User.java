package com.project.mod.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_name")
	private String userName;
	
	@Column(name = "password") 
	private String password;
	
	@Column(name = "full_name")
	private String fullName;
	
	@Column(name = "contact_number")
	private Long contactNumber;
	
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "role")
	private String role;
	
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "id")
//	private Training training;
	
	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "user")
	List<Training> trainings;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public Long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(Long contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(Integer id, String userName, String password, String fullName, Long contactNumber, String gender,
			String role) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.fullName = fullName;
		this.contactNumber = contactNumber;
		this.gender = gender;
		this.role = role;
	}
	
	
}
