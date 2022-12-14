package com.npci.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="productcategory")
public class ProductCategory {

	@Id
	@Column(name="categoryid")
	private long categoryid;
	
	@Column(name="categoryname")
	private String categoryname;

	public ProductCategory() {
		
	}
	
	public ProductCategory(long categoryid, String categoryname) {
		super();
		this.categoryid = categoryid;
		this.categoryname = categoryname;
	}

	public long getCategoryid() {
		return categoryid;
	}

	public void setCategoryId(long categoryid) {
		this.categoryid = categoryid;
	}

	public String getCategoryname() {
		return categoryname;
	}

	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}
	
	
}
