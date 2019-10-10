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
@Table(name = "payment")
public class Payment {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column (name = "txn_type", nullable = false)
	private String txnType;
	
	@Column (name = "amount", nullable = false)
	private Float amount;
	
	@Column (name = "remarks", nullable = false)
	private String remarks;
	
	@Column (name = "mentor_id", nullable = false)
	private Integer mentorId;
	
	@Column (name = "training_id", nullable = false)
	private Integer trainingId;
	
	@Column (name = "total_amount_to_mentor", nullable = false)
	private Float totalAmountToMentor;

	@ManyToMany(fetch = FetchType.LAZY, mappedBy="payment")
	private List<Training> training;
	
	public Payment() {
		super();
	}

	public Payment(Integer id, String txnType, Float amount, String remarks, Integer mentorId,
			Integer trainingId, Float totalAmountToMentor) {
		super();
		this.id = id;
		this.txnType = txnType;
		this.amount = amount;
		this.remarks = remarks;
		this.mentorId = mentorId;
		this.trainingId = trainingId;
		this.totalAmountToMentor = totalAmountToMentor;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTxnType() {
		return txnType;
	}

	public void setTxnType(String txnType) {
		this.txnType = txnType;
	}

	public Float getAmount() {
		return amount;
	}

	public void setAmount(Float amount) {
		this.amount = amount;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public Integer getMentorId() {
		return mentorId;
	}

	public void setMentorId(Integer mentorId) {
		this.mentorId = mentorId;
	}

	public Integer getTrainingId() {
		return trainingId;
	}

	public void setTrainingId(Integer trainingId) {
		this.trainingId = trainingId;
	}

	public Float getTotalAmountToMentor() {
		return totalAmountToMentor;
	}

	public void setTotalAmountToMentor(Float totalAmountToMentor) {
		this.totalAmountToMentor = totalAmountToMentor;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
}
