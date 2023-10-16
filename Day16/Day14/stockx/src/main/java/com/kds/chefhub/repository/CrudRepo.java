package com.kds.chefhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kds.chefhub.model.UserDetails;

public interface CrudRepo extends JpaRepository<UserDetails, Integer> {

}
