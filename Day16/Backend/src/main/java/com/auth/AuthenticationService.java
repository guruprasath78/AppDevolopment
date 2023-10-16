package com.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.config.JwtService;
import com.model.User;
import com.model.enumerate.Role;
import com.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
    	 var user = User.builder()
    	 .email(request.getEmail())
    	 .username(request.getUsername())
    	 .password(passwordEncoder.encode(request.getPassword()))
    	 .role(Role.ADMIN)
    	 .build();
    	 repository.save(user);
    	 return AuthenticationResponse.builder()
    	 .build();
    	}

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
    	System.out.println(request.getUsername());
    	System.out.println(request.getPassword());
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getUsername(),
                request.getPassword()
            )
        );
        var user = repository.findById(request.getUsername()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }
    
}




