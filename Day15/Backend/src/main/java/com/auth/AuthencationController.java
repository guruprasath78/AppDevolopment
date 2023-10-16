package com.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth/users")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthencationController {

    private final AuthenticationService service;


    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
        @RequestBody RegisterRequest request
    ){
    	System.out.println(request.getUsername());
    	System.out.println(request.getEmail());
    	System.out.println(request.getPassword());
        return ResponseEntity.ok(service.register(request));
        //
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
        @RequestBody AuthenticationRequest request
    ){
    	AuthenticationResponse response = service.authenticate(request);
        return ResponseEntity.ok(response);
    }
}

