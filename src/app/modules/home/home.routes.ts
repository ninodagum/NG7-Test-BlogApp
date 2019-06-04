import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';


export const path_home = 'home';
export const homeRoutes: Routes = [
  {
    path: path_home,
    component: HomeComponent
  }
];
