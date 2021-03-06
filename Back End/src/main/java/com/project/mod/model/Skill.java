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
@Table(name="skill")
public class Skill {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column (name = "name", nullable = false)
	private String name;
	
	@Column (name = "toc")
	private String toc;
	
	@Column(name = "prerequisites")
	private String prerequisites;
	
	@ManyToMany(fetch = FetchType.LAZY, mappedBy="skill")
	private List<Training> training;

	public Skill() {
		super();
	}

	public Skill(Integer id, String name, String toc, String prerequisites) {
		super();
		this.id = id;
		this.name = name;
		this.toc = toc;
		this.prerequisites = prerequisites;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getToc() {
		return toc;
	}

	public void setToc(String toc) {
		this.toc = toc;
	}

	public String getPrerequisites() {
		return prerequisites;
	}

	public void setPrerequisites(String prerequisites) {
		this.prerequisites = prerequisites;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
}
