package com;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

import static org.junit.jupiter.api.Assertions.*;

public class ProductServiceTest {

    @Test
    void testTenPercentDiscount() {

        Function<Product, Double> tenPercent =
                p -> p.getPrice() - (p.getPrice() * 0.10);

        ProductService service = new ProductService(tenPercent);

        Product product = new Product("Book", 100);

        assertEquals(90, service.applyDiscount(product));
    }

    @Test
    void testZeroPercentDiscount() {

        Function<Product, Double> zeroPercent = Product::getPrice;

        ProductService service = new ProductService(zeroPercent);

        Product product = new Product("Pen", 50);

        assertEquals(50, service.applyDiscount(product));
    }
   
    @Test
    void testNegativePriceThrowsException() {

        assertThrows(IllegalArgumentException.class, () -> {
            new Product("Bad", -10);
        });
    }

    @Test
    void testMultipleProductsDiscount() {

        Function<Product, Double> tenPercent =
                p -> p.getPrice() - (p.getPrice() * 0.10);

        ProductService service = new ProductService(tenPercent);

        List<Product> products = Arrays.asList(
                new Product("A", 100),
                new Product("B", 200)
        );

        List<Double> result = service.applyDiscountToProducts(products);

        assertEquals(90, result.get(0));
        assertEquals(180, result.get(1));
    }
    
    @Test
    void testDynamicDiscountSwap() {

        Function<Product, Double> tenPercent =
                p -> p.getPrice() * 0.9;

        ProductService service = new ProductService(tenPercent);

        Product product = new Product("Laptop", 1000);

        assertEquals(900, service.applyDiscount(product));

        // Change to 50%
        service.setDiscountFunction(p -> p.getPrice() * 0.5);

        assertEquals(500, service.applyDiscount(product));
    }
}