package com;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class PasswordValidatorTest {
    
    @Test
    void testValidPassword() {
        PasswordValidator validator = new PasswordValidator();
        assertTrue(validator.isValid("Strong@123"));
    }

    @Test
    void testShortPasswordFails() {
        PasswordValidator validator = new PasswordValidator();
        assertFalse(validator.isValid("S@1a"));
    }

    @Test
    void testNoUppercaseFails() {
        PasswordValidator validator = new PasswordValidator();
        assertFalse(validator.isValid("strong@123"));
    }

    @Test
    void testNoDigitFails() {
        PasswordValidator validator = new PasswordValidator();
        assertFalse(validator.isValid("Strong@Pass"));
    }

    @Test
    void testNoSpecialCharacterFails() {
        PasswordValidator validator = new PasswordValidator();
        assertFalse(validator.isValid("Strong1234"));
    }
}
