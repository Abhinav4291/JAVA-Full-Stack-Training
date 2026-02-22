package com;

import java.util.*;

public class UserRepository {

    private Map<Integer, User> users = new HashMap<>();

    public UserRepository() {
        users.put(1, new User(1, "A"));
        users.put(2, new User(2, "B"));
    }

    public Optional<User> findById(int id) {
        return Optional.ofNullable(users.get(id));
    }
}