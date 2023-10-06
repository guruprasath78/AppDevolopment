package com.guruprasath.ims.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guruprasath.ims.Entity.UserDetails;
import com.guruprasath.ims.Repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDetails createUser(UserDetails userDetails) {
        return userRepository.save(userDetails);
    }

    public List<UserDetails> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserDetails> getUserById(int userId) {
        return userRepository.findById(userId);
    }

    public UserDetails updateUser(int userId, UserDetails userDetails) throws Exception {
        Optional<UserDetails> existingUser = userRepository.findById(userId);
        if (existingUser.isPresent()) {
            UserDetails userToUpdate = existingUser.get();
            userToUpdate.setName(userDetails.getName());
            userToUpdate.setPassword(userDetails.getPassword());
            userToUpdate.setEmail(userDetails.getEmail());
            userToUpdate.setOraganization_name(userDetails.getOraganization_name());
            return userRepository.save(userToUpdate);
        } else {
            throw new Exception("User with ID " + userId + " not found");
        }
    }

    public void deleteUser(int userId) {
        userRepository.deleteById(userId);
    }
}
