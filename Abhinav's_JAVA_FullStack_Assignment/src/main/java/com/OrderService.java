package com;

import java.util.List;
import java.util.stream.Collectors;

public class OrderService {

    public double calculateTotal(List<Order> orders) {

        return orders.stream()
                .mapToDouble(Order::getPrice)
                .sum();
    }

    public List<Order> filterOrdersAboveThreshold(List<Order> orders, double threshold) {

        return orders.stream()
                .filter(o -> o.getPrice() > threshold)
                .collect(Collectors.toList());
    }
}