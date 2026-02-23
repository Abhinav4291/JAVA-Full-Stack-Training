package com;

import java.util.ArrayList;
import java.util.List;

public class StudentGradeCalculator {

    private List<Integer> marks = new ArrayList<>();
    public void addMarks(int marks) {
        if (marks < 0) {
            throw new IllegalArgumentException("Marks cannot be negative");
        }
        this.marks.add(marks);
    }
    public double calculateAverage() {
        if (marks.isEmpty()) {
            throw new IllegalStateException("No marks added");
        }

        int sum = 0;
        for (int m : marks) {
            sum += m;
        }

        return (double) sum / marks.size();
    }
    public String getResult() {
        double average = calculateAverage();
        if (average >= 40) {
            return "PASS";
        } else {
            return "FAIL";
        }
    }
}
