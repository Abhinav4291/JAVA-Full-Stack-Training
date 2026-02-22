package com;

import org.junit.jupiter.api.Test;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class OrderServiceTest {

    OrderService service = new OrderService();

    @Test
    void testTotalPrice() {

        List<Order> orders = Arrays.asList(
                new Order(100),
                new Order(200),
                new Order(300)
        );

        assertEquals(600, service.calculateTotal(orders));
    }

    @Test
    void testFilterAboveThreshold() {

        List<Order> orders = Arrays.asList(
                new Order(50),
                new Order(150),
                new Order(250)
        );

        List<Order> result = service.filterOrdersAboveThreshold(orders, 100);

        assertEquals(2, result.size());
    }

    @Test
    void testEmptyOrders() {

        List<Order> orders = new ArrayList<>();

        assertEquals(0, service.calculateTotal(orders));
    }

    @Test
    void testMultipleOrders() {

        List<Order> orders = Arrays.asList(
                new Order(10),
                new Order(20),
                new Order(30)
        );

        assertEquals(60, service.calculateTotal(orders));
    }

    @Test
    void testNegativeOrderThrowsException() {

        assertThrows(IllegalArgumentException.class, () -> {
            new Order(-100);
        });
    }
}