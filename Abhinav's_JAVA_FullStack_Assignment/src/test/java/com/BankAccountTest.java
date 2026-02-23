package com;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class BankAccountTest {
    
    @Test
    void testInitialBalance() {
        BankAccount account = new BankAccount(1000);
        assertEquals(1000, account.getBalance());
    }

    @Test
    void testDepositIncreasesBalance() {
        BankAccount account = new BankAccount(500);
        account.deposit(200);
        assertEquals(700, account.getBalance());
    }

    @Test
    void testDepositNegativeThrowsException() {
        BankAccount account = new BankAccount(500);
        assertThrows(IllegalArgumentException.class, () -> {
            account.deposit(-100);
        });
    }

    @Test
    void testWithdrawDecreasesBalance() {
        BankAccount account = new BankAccount(1000);
        account.withdraw(300);
        assertEquals(700, account.getBalance());
    }

    @Test
    void testWithdrawMoreThanBalanceThrowsException() {
        BankAccount account = new BankAccount(500);
        assertThrows(IllegalArgumentException.class, () -> {
            account.withdraw(600);
        });
    }
}
