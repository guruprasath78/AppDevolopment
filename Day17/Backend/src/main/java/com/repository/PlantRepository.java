package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Plant;



public interface PlantRepository extends JpaRepository<Plant,Integer>{

}
