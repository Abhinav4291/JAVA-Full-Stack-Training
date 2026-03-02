import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { JoiningDatePipe } from '../../pipes/joining-date.pipe';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    MatSortModule,
    JoiningDatePipe,
  ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'name',
    'email',
    'department',
    'dateOfJoining',
    'actions',
  ];
  dataSource = new MatTableDataSource<Employee>([]);
  private subscription?: Subscription;

  constructor(
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar
  ) {
    this.dataSource.filterPredicate = (data: Employee, filter: string) => {
      const term = filter.trim().toLowerCase();
      const fullName = `${data.firstName} ${data.lastName}`.toLowerCase();
      return fullName.includes(term);
    };
  }

  ngOnInit(): void {
    this.subscription = this.employeeService
      .getEmployees$()
      .subscribe((employees) => {
        this.dataSource.data = employees;
      });
  }

  applyFilter(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  deleteEmployee(employee: Employee): void {
    this.employeeService.deleteEmployee(employee.id);
    this.snackBar.open('Employee deleted', 'Close', {
      duration: 3000,
      panelClass: ['snackbar-warn'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

