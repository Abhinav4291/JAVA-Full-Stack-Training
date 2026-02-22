package com;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class MockitoShoppingCartTest {

    @Mock
    DiscountService discountService;

    @InjectMocks
    MockitoShoppingCart cart;

    @Test
    void testTenPercentDiscount() {
        when(discountService.getDiscountPercentage()).thenReturn(10.0);

        cart.addItem("Book", 100);

        assertEquals(90, cart.getTotalPrice());
    }

    @Test
    void testZeroDiscount() {
        when(discountService.getDiscountPercentage()).thenReturn(0.0);

        cart.addItem("Pen", 50);

        assertEquals(50, cart.getTotalPrice());
    }

    @Test
    void testFiftyPercentDiscount() {
        when(discountService.getDiscountPercentage()).thenReturn(50.0);

        cart.addItem("Shoes", 200);

        assertEquals(100, cart.getTotalPrice());
    }

    @Test
    void testDiscountCalledOnce() {
        when(discountService.getDiscountPercentage()).thenReturn(10.0);

        cart.addItem("Bag", 100);
        cart.getTotalPrice();

        verify(discountService, times(1)).getDiscountPercentage();
    }

    @Test
    void testMultipleItemsDiscount() {
        when(discountService.getDiscountPercentage()).thenReturn(20.0);

        cart.addItem("Laptop", 1000);
        cart.addItem("Mouse", 100);

        assertEquals(880, cart.getTotalPrice());
    }
}