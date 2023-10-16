package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Product;
import com.model.Purchases;

public interface PurchasesRepo extends JpaRepository<Purchases, Integer> {

	List<Purchases> findByProduct(Product product);

}
