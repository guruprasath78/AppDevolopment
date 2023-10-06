package Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Entity.UserDetails;
import Service.UserService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	UserService service;
	
	@GetMapping
	List<UserDetails> getUsers()
	{
		return service.getAllUsers();
	}
	@GetMapping
	Optional<UserDetails> getUser(@RequestParam int id)
	{
		return service.getUserById(id);
	}
	@PostMapping
	void addUser(@RequestBody UserDetails details)
	{
		service.createUser(details);
	}
	@PutMapping
	void updateUser(@RequestParam int id,@RequestBody UserDetails details) throws Exception
	{
		service.updateUser(id, details);
	}
	@DeleteMapping
	void deleteUser(@RequestParam int id)
	{
		service.deleteUser(id);
	}
}
