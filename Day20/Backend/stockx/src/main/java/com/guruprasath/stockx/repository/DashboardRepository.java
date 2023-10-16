package com.guruprasath.stockx.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.guruprasath.stockx.model.Dashboard;

@Repository
public interface DashboardRepository extends JpaRepository<Dashboard, Long> {
    // You can add custom query methods here if needed
}
