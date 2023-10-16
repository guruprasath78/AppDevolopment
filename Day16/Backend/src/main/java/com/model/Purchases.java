package com.model;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.Date;

@Entity
public class Purchases {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer purchaseId; // Change the ID field name to purchaseId

    @Temporal(TemporalType.DATE)
    private Date purchaseDate;

    private int quantity;

    private double amount;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public Purchases() {
        // Default constructor
    }

    public Purchases(Date purchaseDate, int quantity, double amount, Product product) {
        this.purchaseDate = purchaseDate;
        this.quantity = quantity;
        this.amount = amount;
        this.product = product;
    }

    // Getters and setters for all fields

    public Integer getPurchaseId() {
        return purchaseId;
    }

    public void setPurchaseId(Integer purchaseId) {
        this.purchaseId = purchaseId;
    }

    public Date getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(Date purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
