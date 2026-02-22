package com;

import java.util.HashMap;
import java.util.Map;

public class ShoppingCart {

    private Map<String, Double> items = new HashMap<>();

    public void addItem(String item, double price) {
        if (price < 0) {
            throw new IllegalArgumentException("Invalid price");
        }
        items.put(item, price);
    }

    public void removeItem(String item) {
        if (!items.containsKey(item)) {
            throw new IllegalArgumentException("Item not found");
        }
        items.remove(item);
    }

    public double getTotalPrice() {
        double total = 0;
        for (double p : items.values()) {
            total += p;
        }
        return total;
    }
}