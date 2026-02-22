package com;

import java.util.HashMap;
import java.util.Map;

public class MockitoShoppingCart {

    private Map<String, Double> items = new HashMap<>();
    private DiscountService discountService;

    public MockitoShoppingCart(DiscountService discountService) {
        this.discountService = discountService;
    }

    public void addItem(String item, double price) {
        items.put(item, price);
    }

    public void removeItem(String item) {
        items.remove(item);
    }

    public double getTotalPrice() {

        double total = 0;
        for (double price : items.values()) {
            total += price;
        }

        double discount = discountService.getDiscountPercentage();

        return total - (total * discount / 100);
    }
}