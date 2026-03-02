import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeeModule)
  }
];
