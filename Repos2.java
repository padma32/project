package com.example.demo.Sample.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Sample.models.Model2;
import com.example.demo.Sample.models.Model3;

public interface Repos2 extends JpaRepository<Model2,String> {

	Model2 findByUsername(String user);

	

	




}
