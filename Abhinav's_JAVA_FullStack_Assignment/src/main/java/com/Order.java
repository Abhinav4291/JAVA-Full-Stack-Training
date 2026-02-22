package com;

public class Order {

    private double price;

    public Order(double price) {
        if (price < 0) {
            throw new IllegalArgumentException("Order price cannot be negative");
        }
        this.price = price;
    }

    public double getPrice() {
        return price;
    }
}