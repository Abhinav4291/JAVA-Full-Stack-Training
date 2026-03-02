import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

import { Employee, EmployeeService } from './employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  private readonly employeeService = inject(EmployeeService);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  readonly displayedColumns = ['name', 'email', 'phone', 'department', 'actions'];

  private readonly employeesSignal = signal<Employee[]>([]);
  readonly filterDepartment = signal<string>('');

  readonly filteredEmployees = computed(() => {
    const term = this.filterDepartment().trim().toLowerCase();
    const employees = this.employeesSignal();
    if (!term) {
      return employees;
    }
    return employees.filter((e) => {
      const department = e.department?.toLowerCase() ?? '';
      const phone = e.phone?.toLowerCase() ?? '';
      return department.includes(term) || phone.includes(term);
    });
  });

  readonly totalEmployees = computed(() => this.employeesSignal().length);
  readonly visibleEmployees = computed(() => this.filteredEmployees().length);

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (employees) => this.employeesSignal.set(employees),
      error: () =>
        this.snackBar.open('Failed to load employees. Please check the employee API.', 'Close', {
          duration: 4000
        })
    });
  }

  onAddEmployee(): void {
    this.router.navigate(['/add']);
  }

  onDelete(employee: Employee): void {
    if (!employee.id) return;
    this.employeeService.deleteEmployee(employee.id).subscribe({
      next: () => {
        this.snackBar.open('Employee removed from directory', 'Close', { duration: 3000 });
        this.loadEmployees();
      },
      error: () =>
        this.snackBar.open('Failed to delete employee. Please try again.', 'Close', {
          duration: 4000
        })
    });
  }
}

