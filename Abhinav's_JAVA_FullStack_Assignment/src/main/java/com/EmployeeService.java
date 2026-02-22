package com;

import java.util.List;
import java.util.stream.Collectors;

public class EmployeeService {

    public List<String> getEmployeesWithSalaryAbove50k(List<employee> employees) {

        return employees.stream()
                .filter(e -> e.getSalary() > 50000)
                .map(employee::getName)
                .collect(Collectors.toList());
    }
}