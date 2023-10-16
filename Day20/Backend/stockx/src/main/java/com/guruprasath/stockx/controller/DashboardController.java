package com.guruprasath.stockx.controller;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.guruprasath.stockx.model.Dashboard;
import com.guruprasath.stockx.repository.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private DashboardRepository dashboardRepository;

    // Create a new product
    @PostMapping("/add")
    public ResponseEntity<Dashboard> addProduct(@RequestBody Dashboard product) {
        try {
        	Dashboard newProduct = dashboardRepository.save(product);
            return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Retrieve all products
    @GetMapping("/all")
    public ResponseEntity<List<Dashboard>> getAllProducts() {
        List<Dashboard> products = dashboardRepository.findAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    // Retrieve a product by ID
    @GetMapping("/{id}")
    public ResponseEntity<Dashboard> getProductById(@PathVariable("id") Long id) {
        Optional<Dashboard> productData = dashboardRepository.findById(id);
        if (productData.isPresent()) {
            return new ResponseEntity<>(productData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
