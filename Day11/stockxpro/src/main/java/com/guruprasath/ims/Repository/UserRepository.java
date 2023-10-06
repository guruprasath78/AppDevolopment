package com.guruprasath.ims.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.guruprasath.ims.Entity.UserDetails;

@Repository
public interface UserRepository extends JpaRepository<UserDetails, Integer> {

}
