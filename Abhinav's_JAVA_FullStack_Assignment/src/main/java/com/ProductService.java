package com;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class ProductService {

    private Function<Product, Double> discountFunction;

    public ProductService(Function<Product, Double> discountFunction) {
        this.discountFunction = discountFunction;
    }

    // Single product discount
    public double applyDiscount(Product product) {
        return discountFunction.apply(product);
    }

    // Multiple products using streams
    public List<Double> applyDiscountToProducts(List<Product> products) {

        return products.stream()
                .map(discountFunction)
                .collect(Collectors.toList());
    }

    // Swap discount dynamically
    public void setDiscountFunction(Function<Product, Double> discountFunction) {
        this.discountFunction = discountFunction;
    }
}