package com;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TemperatureConverterTest {

    @Test
    void testCelsiusToFahrenheit() {
        TemperatureConverter converter = new TemperatureConverter();
        assertEquals(32.0, converter.celsiusToFahrenheit(0));
        assertEquals(212.0, converter.celsiusToFahrenheit(100));
    }

    @Test
    void testFahrenheitToCelsius() {
        TemperatureConverter converter = new TemperatureConverter();
        assertEquals(0.0, converter.fahrenheitToCelsius(32));
        assertEquals(100.0, converter.fahrenheitToCelsius(212));
    }

    @Test
    void testNegativeCelsius() {
        TemperatureConverter converter = new TemperatureConverter();
        assertEquals(14.0, converter.celsiusToFahrenheit(-10));
    }

    @Test
    void testLargeFahrenheit() {
        TemperatureConverter converter = new TemperatureConverter();
        assertEquals(537.7778, converter.fahrenheitToCelsius(1000), 0.0001);
    }

    @Test
    void testZeroCelsiusEquals32Fahrenheit() {
        TemperatureConverter converter = new TemperatureConverter();
        assertEquals(32.0, converter.celsiusToFahrenheit(0));
    }
}