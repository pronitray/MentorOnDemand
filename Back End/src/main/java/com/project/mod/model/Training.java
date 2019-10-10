package com.project.mod.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="training")
public class Training {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "progress")
	private Integer progress = 0;
	
	@Column(name = "fees")
	private Float fees = 0.0f;
	
	@Column(name = "commision_amount")
	private Float commisionAmount = 0.0f;
	
	@Column(name = "rating")
	private Integer rating = 0;
	
	@Column(name = "start_date")
	private String startDate;
	
	@Column(name = "end_date")
	private String endDate;
	
	@Column(name = "amount_received")
	private Float amountReceived = 0.0f;
	
	@Column(name = "training_name")
	private String trainingName;

	
//	@OneToMany(mappedBy = "training", cascade = CascadeType.ALL)
//	@JoinColumn(name = "user_id")
//	private List<User> trainingUsers;
	
	@JsonManagedReference
	@ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
	private List<User> user;
	
	@JsonManagedReference
	@ManyToOne(cascade = CascadeType.ALL)
	private Mentor mentor;
	
	@JsonManagedReference
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Payment> payment;
	
	@JsonManagedReference
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
	private List<Skill> skill;
	
	@JsonManagedReference
	@ManyToOne(cascade = CascadeType.ALL)
	private Technology technology;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getProgress() {
		return progress;
	}

	public void setProgress(Integer progress) {
		this.progress = progress;
	}

	public Float getFees() {
		return fees;
	}

	public void setFees(Float fees) {
		this.fees = fees;
	}

	public Float getCommisionAmount() {
		return commisionAmount;
	}

	public void setCommisionAmount(Float commisionAmount) {
		this.commisionAmount = commisionAmount;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public Float getAmountRecieved() {
		return amountReceived;
	}

	public void setAmountRecieved(Float amountReceived) {
		this.amountReceived = amountReceived;
	}
	

	public String getTrainingName() {
		return trainingName;
	}

	public void setTrainingName(String trainingName) {
		this.trainingName = trainingName;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Training() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Training(Integer id, String status, Integer progress, Float fees, Float commisionAmount, Integer rating,
			String startDate, String endDate, Float amountReceived, String trainingName, List<User> user, Mentor mentor,
			List<Payment> payment,  List<Skill> skill,  Technology technology) {
		super();
		this.id = id;
		this.status = status;
		this.progress = progress;
		this.fees = fees;
		this.commisionAmount = commisionAmount;
		this.rating = rating;
		this.startDate = startDate;
		this.endDate = endDate;
		this.amountReceived = amountReceived;
		this.trainingName = trainingName;
		this.user = user;
		this.mentor = mentor;
		this.payment = payment;
		this.skill = skill;
		this.technology = technology;
	}


	
}
