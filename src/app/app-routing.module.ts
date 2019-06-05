import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { loginRoutes } from './modules/login/login.routes';
import { homeRoutes, path_home } from './modules/home/home.routes';
import { UserService } from './core/user/user.service';
import { AuthenticationService } from './core/authentication/authentication.service';

const defaultRoute: Route = {
  path: '',
  redirectTo: path_home,
  pathMatch: 'full'
}
const secureRoutes: Routes = [defaultRoute, ...homeRoutes];
secureRoutes.forEach(route => { route.canActivate = [AuthenticationService]; });

const routes = [...secureRoutes, ...loginRoutes];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
