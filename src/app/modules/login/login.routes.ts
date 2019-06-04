import {  Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const path_login = 'login';
export const loginRoutes: Routes = [
  {
    path: path_login,
    component: LoginComponent
  }
];
