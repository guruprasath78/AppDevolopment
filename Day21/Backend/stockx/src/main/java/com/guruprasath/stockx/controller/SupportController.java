package com.guruprasath.stockx.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.guruprasath.stockx.model.Support;
import com.guruprasath.stockx.repository.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/support")
public class SupportController {

    @Autowired
    private SupportRepository supportRepository;

    @PostMapping("/add")
    public ResponseEntity<Support> addProduct(@RequestBody Support product) {
        try {
        	Support newProduct = supportRepository.save(product);
            return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        } 
    }

     @GetMapping("/all")
    public ResponseEntity<List<Support>> getAllProducts() {
        List<Support> products = supportRepository.findAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    // Retrieve a product by ID
    @GetMapping("/{id}")
    public ResponseEntity<Support> getProductById(@PathVariable("id") Long id) {
        Optional<Support> productData = supportRepository.findById(id);
        if (productData.isPresent()) {
            return new ResponseEntity<>(productData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
