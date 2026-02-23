package com;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class ProductService {

    private Function<Product, Double> discountFunction;

    public ProductService(Function<Product, Double> discountFunction) {
        this.discountFunction = discountFunction;
    }
    public double applyDiscount(Product product) {
        return discountFunction.apply(product);
    }

    public List<Double> applyDiscountToProducts(List<Product> products) {

        return products.stream()
                .map(discountFunction)
                .collect(Collectors.toList());
    }

    public void setDiscountFunction(Function<Product, Double> discountFunction) {
        this.discountFunction = discountFunction;
    }
}
