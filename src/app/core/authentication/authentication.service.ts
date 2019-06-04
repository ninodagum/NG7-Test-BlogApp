import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { path_login } from 'src/app/modules/login/login.routes';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { User } from '../user/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{
  private url_users = 'users';

  constructor(
    private userService: UserService,
    private router: Router,
    private httpService: HttpService) { }

  login(username: string, password:string, onSuccess?: (user: User) => void, onFail?: () => void){
      this.httpService.get(this.url_users).subscribe(
        (users: User[]) => {
          if(users){
               const matchedUser = users.filter(user => (username == user.username && password == user.password));
               if(matchedUser.length === 1){
                  if(onSuccess){
                      onSuccess(matchedUser[0]);
                  }
               }
          }
        }
      );
  }


  logout(){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.userService.user){
      return true;
    }else{
      this.router.navigateByUrl(path_login);
      return false;
    }
  }
}
