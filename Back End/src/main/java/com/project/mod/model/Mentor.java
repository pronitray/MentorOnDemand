package com.project.mod.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "mentor")
public class Mentor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
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
	
	@Column(name = "starting_date")
	private String startingDate;
	
	@Column(name = "ending_date")
	private String endingDate;
	
	@Column(name = "technologies")
	private String technologies;
	
	@Column(name = "facilities")
	private String facilities;
	
	@Column(name = "linkedin_profile")
	private String linkedinProfile;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "mentor")
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

	public String getStartingDate() {
		return startingDate;
	}

	public void setStartingDate(String startingDate) {
		this.startingDate = startingDate;
	}

	public String getEndingDate() {
		return endingDate;
	}

	public void setEndingDate(String endingDate) {
		this.endingDate = endingDate;
	}

	public String getTechnologies() {
		return technologies;
	}

	public void setTechnologies(String technologies) {
		this.technologies = technologies;
	}

	public String getFacilities() {
		return facilities;
	}

	public void setFacilities(String facilities) {
		this.facilities = facilities;
	}

	public String getLinkedinProfile() {
		return linkedinProfile;
	}

	public void setLinkedinProfile(String linkedinProfile) {
		this.linkedinProfile = linkedinProfile;
	}

	public Mentor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Mentor(Integer id, String userName, String password, String fullName, Long contactNumber, String gender,
			String role, String startingDate, String endingDate, String technologies, String facilities,
			String linkedinProfile) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.fullName = fullName;
		this.contactNumber = contactNumber;
		this.gender = gender;
		this.role = role;
		this.startingDate = startingDate;
		this.endingDate = endingDate;
		this.technologies = technologies;
		this.facilities = facilities;
		this.linkedinProfile = linkedinProfile;
	}
	
	
}
