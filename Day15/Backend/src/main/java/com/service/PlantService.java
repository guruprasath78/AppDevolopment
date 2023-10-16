package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Plant;
import com.repository.PlantRepository;



@Service
public class PlantService {

	@Autowired
	PlantRepository plantRepository;
	
	public Optional<List<Plant>> getAll()   
	{  
		return Optional.of(plantRepository.findAll());
	}  
	
	public Optional<Plant> getPlant(int id)   
	{  
		return plantRepository.findById(id); 
	}
	
	public void deletePlant(int id)   
	{  
		plantRepository.deleteById(id);  
	}
	
	public Plant savePlant(Plant p)   
	{  
		return plantRepository.save(p);  
	}
	
	public Plant updatePlant(Plant p)   
	{  
		plantRepository.save(p);  
		return p;  
	}

	
}

