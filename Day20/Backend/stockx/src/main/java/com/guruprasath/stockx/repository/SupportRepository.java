package com.guruprasath.stockx.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.guruprasath.stockx.model.Support;

@Repository
public interface SupportRepository extends JpaRepository<Support, Long> {
    // You can add custom query methods here if needed
}
