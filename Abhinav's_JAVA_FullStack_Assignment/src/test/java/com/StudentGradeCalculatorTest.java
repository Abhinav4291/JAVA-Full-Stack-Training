package com;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

public class StudentGradeCalculatorTest {

    @Test
    void testAverageCalculation() {
        StudentGradeCalculator calculator = new StudentGradeCalculator();
        calculator.addMarks(50);
        calculator.addMarks(60);
        calculator.addMarks(70);

        double average = calculator.calculateAverage();
        assertEquals(60.0, average);
    }

    @Test
    void testPassResult() {
        StudentGradeCalculator calculator = new StudentGradeCalculator();
        calculator.addMarks(40);
        calculator.addMarks(50);

        assertEquals("PASS", calculator.getResult());
    }

    @Test
    void testFailResult() {
        StudentGradeCalculator calculator = new StudentGradeCalculator();
        calculator.addMarks(20);
        calculator.addMarks(30);

        assertEquals("FAIL", calculator.getResult());
    }

    @Test
    void testNegativeMarksThrowsException() {
        StudentGradeCalculator calculator = new StudentGradeCalculator();

        assertThrows(IllegalArgumentException.class, () -> {
            calculator.addMarks(-10);
        });
    }

    @Test
    void testNoMarksAddedThrowsException() {
        StudentGradeCalculator calculator = new StudentGradeCalculator();

        assertThrows(IllegalStateException.class, () -> {
            calculator.calculateAverage();
        });
    }
}