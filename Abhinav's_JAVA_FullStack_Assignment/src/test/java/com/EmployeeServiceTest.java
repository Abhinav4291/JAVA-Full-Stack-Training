package com;

import org.junit.jupiter.api.Test;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class EmployeeServiceTest {

    EmployeeService service = new EmployeeService();

    @Test
    void testFilterSalaryAbove50k() {

        List<employee> list = Arrays.asList(
                new employee("A", 40000),
                new employee("B", 60000),
                new employee("C", 70000)
        );

        List<String> result = service.getEmployeesWithSalaryAbove50k(list);

        assertEquals(2, result.size());
        assertTrue(result.contains("B"));
        assertTrue(result.contains("C"));
    }

    @Test
    void testSalaryBelow50kExcluded() {

        List<employee> list = Arrays.asList(
                new employee("A", 50000),
                new employee("B", 30000)
        );

        List<String> result = service.getEmployeesWithSalaryAbove50k(list);

        assertTrue(result.isEmpty());
    }

    @Test
    void testOnlyNamesReturned() {

        List<employee> list = Arrays.asList(
                new employee("A", 60000)
        );

        List<String> result = service.getEmployeesWithSalaryAbove50k(list);

        assertEquals("A", result.get(0));
    }

    @Test
    void testEmptyEmployeeList() {

        List<employee> list = new ArrayList<>();

        List<String> result = service.getEmployeesWithSalaryAbove50k(list);

        assertTrue(result.isEmpty());
    }

    @Test
    void testAllEmployeesAbove50k() {

        List<employee> list = Arrays.asList(
                new employee("A", 60000),
                new employee("B", 80000)
        );

        List<String> result = service.getEmployeesWithSalaryAbove50k(list);

        assertEquals(2, result.size());
    }
}
