package com.npci.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.api.entity.Product;



@RepositoryRestResource(path="prod")
@CrossOrigin("http://localhost:4200/")
public interface ProductRepository extends JpaRepository<Product, Integer> {

}
