package com;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

public class MultiStudentGradeManagerTest {

    @Test
    void testMultipleStudentsIndependent() {
        MultiStudentGradeManager manager = new MultiStudentGradeManager();

        manager.addStudent("Abhi");
        manager.addStudent("Ayush");

        manager.addMarks("Abhi", 80);
        manager.addMarks("Ayush", 40);

        assertEquals(80.0, manager.calculateAverage("Abhi"));
        assertEquals(40.0, manager.calculateAverage("Ayush"));
    }

    @Test
    void testResultPerStudent() {
        MultiStudentGradeManager manager = new MultiStudentGradeManager();

        manager.addStudent("A");
        manager.addMarks("A", 50);

        manager.addStudent("B");
        manager.addMarks("B", 20);

        assertEquals("PASS", manager.getResult("A"));
        assertEquals("FAIL", manager.getResult("B"));
    }

    @Test
    void testAddMarksToNonExistentStudent() {
        MultiStudentGradeManager manager = new MultiStudentGradeManager();

        assertThrows(IllegalArgumentException.class, () -> {
            manager.addMarks("Unknown", 50);
        });
    }

    @Test
    void testGetTopper() {
        MultiStudentGradeManager manager = new MultiStudentGradeManager();

        manager.addStudent("Abhi");
        manager.addMarks("Abhi", 60);

        manager.addStudent("Ayush");
        manager.addMarks("Ayush", 90);

        assertEquals("Ayush", manager.getTopper());
    }

    @Test
    void testNoStudentsAdded() {
        MultiStudentGradeManager manager = new MultiStudentGradeManager();

        assertThrows(IllegalStateException.class, () -> {
            manager.getTopper();
        });
    }
}
