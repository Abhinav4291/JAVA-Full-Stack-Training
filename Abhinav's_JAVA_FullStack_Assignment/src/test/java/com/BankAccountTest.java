package com;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class BankAccountTest {

    // 1️⃣ Verify initial balance
    @Test
    void testInitialBalance() {
        BankAccount account = new BankAccount(1000);
        assertEquals(1000, account.getBalance());
    }

    // 2️⃣ Valid deposit increases balance
    @Test
    void testDepositIncreasesBalance() {
        BankAccount account = new BankAccount(500);
        account.deposit(200);
        assertEquals(700, account.getBalance());
    }

    // 3️⃣ Negative deposit throws exception
    @Test
    void testDepositNegativeThrowsException() {
        BankAccount account = new BankAccount(500);
        assertThrows(IllegalArgumentException.class, () -> {
            account.deposit(-100);
        });
    }

    // 4️⃣ Valid withdrawal decreases balance
    @Test
    void testWithdrawDecreasesBalance() {
        BankAccount account = new BankAccount(1000);
        account.withdraw(300);
        assertEquals(700, account.getBalance());
    }

    // 5️⃣ Withdraw more than balance throws exception
    @Test
    void testWithdrawMoreThanBalanceThrowsException() {
        BankAccount account = new BankAccount(500);
        assertThrows(IllegalArgumentException.class, () -> {
            account.withdraw(600);
        });
    }
}