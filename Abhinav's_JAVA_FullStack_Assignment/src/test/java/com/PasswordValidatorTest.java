package com;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class PasswordValidatorTest {
    // 1️⃣ Valid password test
    @Test
    void testValidPassword() {
        PasswordValidator validator = new PasswordValidator();
        assertTrue(validator.isValid("Strong@123"));
    }
    // 2️⃣ Less than 8 characters
    @Test
    void testShortPasswordFails() {
        PasswordValidator validator = new PasswordValidator();
        assertFalse(validator.isValid("S@1a"));
    }
    // 3️⃣ No uppercase letter
    @Test
    void testNoUppercaseFails() {
        PasswordValidator validator = new PasswordValidator();
        assertFalse(validator.isValid("strong@123"));
    }
    // 4️⃣ No digit
    @Test
    void testNoDigitFails() {
        PasswordValidator validator = new PasswordValidator();
        assertFalse(validator.isValid("Strong@Pass"));
    }
    // 5️⃣ No special character
    @Test
    void testNoSpecialCharacterFails() {
        PasswordValidator validator = new PasswordValidator();
        assertFalse(validator.isValid("Strong1234"));
    }
}