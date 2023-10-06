package com.kds.chefhub.auth;



import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kds.chefhub.Service.UserService;
import com.kds.chefhub.model.UserDetails;



@RestController
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	UserService service;
	
	@GetMapping("/allusers")
	List<UserDetails> getUsers()
	{
		return service.getAllUsers();
	}
	@GetMapping("/id")
	Optional<UserDetails> getUser(@RequestParam int id)
	{
		return service.getUserById(id);
	}
	@PostMapping("/newuser")
	Optional<UserDetails> addUser(@RequestBody UserDetails details)
	{
		service.createUser(details);
		return service.getUserById(details.getId());
	}
	@PutMapping("updateuser")
	void updateUser(@RequestParam int id,@RequestBody UserDetails details) throws Exception
	{
		service.updateUser(id, details);
	}
	@DeleteMapping("deleteuser")
	void deleteUser(@RequestParam int id)
	{
		service.deleteUser(id);
	}
}
