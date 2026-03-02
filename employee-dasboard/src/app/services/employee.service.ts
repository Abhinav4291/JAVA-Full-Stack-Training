import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [];
  private employeesSubject = new BehaviorSubject<Employee[]>([]);
  private nextId = 1;

  getEmployees$(): Observable<Employee[]> {
    return this.employeesSubject.asObservable();
  }

  addEmployee(employee: Omit<Employee, 'id'>): void {
    const newEmployee: Employee = {
      ...employee,
      id: this.nextId++,
    };
    this.employees = [...this.employees, newEmployee];
    this.employeesSubject.next(this.employees);
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter((e) => e.id !== id);
    this.employeesSubject.next(this.employees);
  }
}
