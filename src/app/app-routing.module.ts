import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { loginRoutes } from './modules/login/login.routes';

const defaultRoute: Route = {
  path: '',
  redirectTo: 'home'
}
const routes: Routes = [defaultRoute, ...loginRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
