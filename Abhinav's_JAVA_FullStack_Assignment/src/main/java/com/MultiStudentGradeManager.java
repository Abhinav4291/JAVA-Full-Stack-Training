package com;

import java.util.HashMap;
import java.util.Map;

public class MultiStudentGradeManager {

    private Map<String, StudentGradeCalculator> students = new HashMap<>();

    // Add new student
    public void addStudent(String name) {
        if (students.containsKey(name)) {
            throw new IllegalArgumentException("Student already exists");
        }
        students.put(name, new StudentGradeCalculator());
    }

    // Add marks for specific student
    public void addMarks(String name, int marks) {
        StudentGradeCalculator calculator = students.get(name);

        if (calculator == null) {
            throw new IllegalArgumentException("Student not found");
        }

        calculator.addMarks(marks);
    }

    // Calculate average for specific student
    public double calculateAverage(String name) {
        StudentGradeCalculator calculator = students.get(name);

        if (calculator == null) {
            throw new IllegalArgumentException("Student not found");
        }

        return calculator.calculateAverage();
    }

    // Get result for specific student
    public String getResult(String name) {
        StudentGradeCalculator calculator = students.get(name);

        if (calculator == null) {
            throw new IllegalArgumentException("Student not found");
        }

        return calculator.getResult();
    }

    // Get topper (highest average student)
    public String getTopper() {
        if (students.isEmpty()) {
            throw new IllegalStateException("No students available");
        }

        String topper = null;
        double highestAverage = -1;

        for (Map.Entry<String, StudentGradeCalculator> entry : students.entrySet()) {
            double avg = entry.getValue().calculateAverage();

            if (avg > highestAverage) {
                highestAverage = avg;
                topper = entry.getKey();
            }
        }

        return topper;
    }
}