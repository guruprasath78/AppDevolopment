package com.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.User;
import com.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin("*")
public class userController {
	
	@Autowired
	UserRepository userrepo;
	
    @GetMapping("/users")
    public List<User> getAll() {
        return userrepo.findAll();
    }

}
