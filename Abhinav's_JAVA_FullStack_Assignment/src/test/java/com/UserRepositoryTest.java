package com;

import org.junit.jupiter.api.Test;

import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

public class UserRepositoryTest {

    UserRepository repository = new UserRepository();

    @Test
    void testValidUserId() {

        Optional<User> user = repository.findById(1);

        assertTrue(user.isPresent());
        assertEquals("A", user.get().getName());
    }

    @Test
    void testInvalidUserId() {

        Optional<User> user = repository.findById(99);

        assertTrue(user.isEmpty());
    }

    @Test
    void testGetOnEmptyOptionalThrowsException() {

        Optional<User> user = repository.findById(100);

        assertThrows(NoSuchElementException.class, user::get);
    }

    @Test
    void testOrElseDefaultUser() {

        User defaultUser = new User(0, "Default");

        User user = repository.findById(200)
                .orElse(defaultUser);

        assertEquals("Default", user.getName());
    }

    @Test
    void testIsPresent() {

        assertTrue(repository.findById(1).isPresent());
        assertFalse(repository.findById(500).isPresent());
    }
}