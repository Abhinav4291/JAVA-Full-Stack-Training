package com;

public class PasswordValidator {

    public boolean isValid(String password) {

        if (password == null) {
            return false;
        }

        // Minimum 8 characters
        if (password.length() < 8) {
            return false;
        }

        boolean hasUppercase = false;
        boolean hasDigit = false;
        boolean hasSpecial = false;

        for (char ch : password.toCharArray()) {

            if (Character.isUpperCase(ch)) {
                hasUppercase = true;
            } 
            else if (Character.isDigit(ch)) {
                hasDigit = true;
            } 
            else if (!Character.isLetterOrDigit(ch)) {
                hasSpecial = true;
            }
        }

        return hasUppercase && hasDigit && hasSpecial;
    }
}