package com.guruprasath.stockx.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guruprasath.stockx.model.Support;
import com.guruprasath.stockx.repository.*;

import java.util.List;
import java.util.Optional;

@Service
public class SupportService {

    private final SupportRepository supportRepository;

    @Autowired
    public SupportService(SupportRepository supportRepository) {
        this.supportRepository = supportRepository;
    }

    public List<Support> getAllProducts() {
        return supportRepository.findAll();
    }

    public Support getProductById(Long id) {
        Optional<Support> productOptional = supportRepository.findById(id);
        return productOptional.orElse(null);
    }

    public Support createProduct(Support product) {
        return supportRepository.save(product);
    }

    public Support updateProduct(Long id, Support updatedProduct) {
        Optional<Support> productOptional = supportRepository.findById(id);
        if (productOptional.isPresent()) {
            updatedProduct.setId(id);
            return supportRepository.save(updatedProduct);
        }
        return null; // Product not found
    }

    public void deleteProduct(Long id) {
    	supportRepository.deleteById(id);
    }
}
