package com.guruprasath.stockx.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guruprasath.stockx.model.Dashboard;
import com.guruprasath.stockx.repository.*;

import java.util.List;
import java.util.Optional;

@Service
public class DashboardService {

    private final DashboardRepository dashboardRepository;

    @Autowired
    public DashboardService(DashboardRepository dashboardRepository) {
        this.dashboardRepository = dashboardRepository;
    }

    public List<Dashboard> getAllProducts() {
        return dashboardRepository.findAll();
    }

    public Dashboard getProductById(Long id) {
        Optional<Dashboard> productOptional = dashboardRepository.findById(id);
        return productOptional.orElse(null);
    }

    public Dashboard createProduct(Dashboard product) {
        return dashboardRepository.save(product);
    }

    public Dashboard updateProduct(Long id, Dashboard updatedProduct) {
        Optional<Dashboard> productOptional = dashboardRepository.findById(id);
        if (productOptional.isPresent()) {
            updatedProduct.setId(id);
            return dashboardRepository.save(updatedProduct);
        }
        return null; // Product not found
    }

    public void deleteProduct(Long id) {
        dashboardRepository.deleteById(id);
    }
}
