package com;

public class BankAccount {

    private double balance;

    // Constructor to set initial balance
    public BankAccount(double initialBalance) {
        if (initialBalance < 0) {
            throw new IllegalArgumentException("Initial balance cannot be negative");
        }
        this.balance = initialBalance;
    }

    // Deposit method
    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be positive");
        }
        balance += amount;
    }

    // Withdraw method
    public void withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive");
        }

        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient balance");
        }

        balance -= amount;
    }

    // Get balance
    public double getBalance() {
        return balance;
    }
}