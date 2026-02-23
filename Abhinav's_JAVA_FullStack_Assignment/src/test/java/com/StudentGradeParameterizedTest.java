package com;
import java.util.stream.Stream;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;

public class StudentGradeParameterizedTest {


    @ParameterizedTest
    @ValueSource(ints = {10, 40, 75, 100})
    void testValidMarksDoNotThrow(int marks) {
        StudentGradeCalculator calculator = new StudentGradeCalculator();
        Assertions.assertDoesNotThrow(() -> calculator.addMarks(marks));
    }

    @ParameterizedTest
    @CsvSource({
            "50, 60, 70, 60.0",
            "40, 40, 40, 40.0",
            "10, 20, 30, 20.0"
    })
    void testAverageCalculation(int m1, int m2, int m3, double expectedAverage) {
        StudentGradeCalculator calculator = new StudentGradeCalculator();
        calculator.addMarks(m1);
        calculator.addMarks(m2);
        calculator.addMarks(m3);

        Assertions.assertEquals(expectedAverage, calculator.calculateAverage());
    }

    @ParameterizedTest
    @CsvSource({
            "50, 60, PASS",
            "40, 40, PASS",
            "10, 20, FAIL"
    })
    void testPassFailResult(int m1, int m2, String expectedResult) {
        StudentGradeCalculator calculator = new StudentGradeCalculator();
        calculator.addMarks(m1);
        calculator.addMarks(m2);

        Assertions.assertEquals(expectedResult, calculator.getResult());
    }

    @ParameterizedTest
    @ValueSource(ints = {-1, -10, -100})
    void testNegativeMarksThrowException(int marks) {
        StudentGradeCalculator calculator = new StudentGradeCalculator();
        Assertions.assertThrows(IllegalArgumentException.class,
                () -> calculator.addMarks(marks));
    }

    static Stream<org.junit.jupiter.params.provider.Arguments> complexAverageData() {
        return Stream.of(
                org.junit.jupiter.params.provider.Arguments.of(new int[]{80, 90, 100}, 90.0),
                org.junit.jupiter.params.provider.Arguments.of(new int[]{30, 40, 50}, 40.0),
                org.junit.jupiter.params.provider.Arguments.of(new int[]{20, 30}, 25.0)
        );
    }

    @ParameterizedTest
    @MethodSource("complexAverageData")
    void testComplexAverage(int[] marks, double expectedAverage) {
        StudentGradeCalculator calculator = new StudentGradeCalculator();

        for (int m : marks) {
            calculator.addMarks(m);
        }

        Assertions.assertEquals(expectedAverage, calculator.calculateAverage());
    }
}
