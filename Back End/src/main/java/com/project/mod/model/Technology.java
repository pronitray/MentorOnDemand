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
@Table(name="technology")

public class Technology {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="tech_name",nullable=false)
	private String techName;
	
	@Column(name="price",nullable=false)
	private Float price;
	
	@Column(name="duration",nullable=false)
	private String duration;
	
	@Column(name="remarks",nullable=false)
	private String remarks;
	

	@OneToMany(fetch = FetchType.LAZY, mappedBy="technology")
	List<Training> trainings;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTechName() {
		return techName;
	}

	public void setTechName(String techName) {
		this.techName = techName;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Technology() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Technology(Integer id, String techName, Float price, String duration, String remarks,
			List<Training> trainings) {
		super();
		this.id = id;
		this.techName = techName;
		this.price = price;
		this.duration = duration;
		this.remarks = remarks;
		this.trainings = trainings;
	}
	
	
}
