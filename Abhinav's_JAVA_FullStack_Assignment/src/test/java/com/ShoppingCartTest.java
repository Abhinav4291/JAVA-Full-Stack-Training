package com;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ShoppingCartTest {

    @Test
    void testAddItemsIncreaseTotal() {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem("Book", 200);
        cart.addItem("Pen", 50);
        assertEquals(250, cart.getTotalPrice());
    }

    @Test
    void testRemoveItemDecreasesTotal() {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem("Book", 200);
        cart.addItem("Pen", 50);
        cart.removeItem("Pen");
        assertEquals(200, cart.getTotalPrice());
    }

    @Test
    void testRemoveNonExistentItem() {
        ShoppingCart cart = new ShoppingCart();
        assertThrows(IllegalArgumentException.class, () -> cart.removeItem("Laptop"));
    }

    @Test
    void testMultipleItems() {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem("A", 100);
        cart.addItem("B", 200);
        cart.addItem("C", 300);
        assertEquals(600, cart.getTotalPrice());
    }

    @Test
    void testEmptyCart() {
        ShoppingCart cart = new ShoppingCart();
        assertEquals(0, cart.getTotalPrice());
    }
}