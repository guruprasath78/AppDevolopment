package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.model.Purchases;
import com.repository.PurchasesRepo;
import com.model.Product;

import java.util.List;
import java.util.Optional;

@Service
public class PurchasesService {

    private final PurchasesRepo purchasesRepository;

    @Autowired
    public PurchasesService(PurchasesRepo purchasesRepository) {
        this.purchasesRepository = purchasesRepository;
    }

    public List<Purchases> getAllPurchases() {
        return purchasesRepository.findAll();
    }

    public Purchases getPurchasesById(Integer id) {
        Optional<Purchases> purchasesOptional = purchasesRepository.findById(id);
        return purchasesOptional.orElse(null);
    }

    public Purchases createPurchases(Purchases purchases) {
        return purchasesRepository.save(purchases);
    }

    public Purchases updatePurchases(Integer id, Purchases updatedPurchases) {
        Optional<Purchases> purchasesOptional = purchasesRepository.findById(id);
        if (purchasesOptional.isPresent()) {
            updatedPurchases.setPurchaseId(id);
            return purchasesRepository.save(updatedPurchases);
        }
        return null; // Purchases not found
    }

    public void deletePurchases(Integer id) {
        purchasesRepository.deleteById(id);
    }

    public List<Purchases> getAllPurchasesByProduct(Product product) {
        return purchasesRepository.findByProduct(product);
    }
}
