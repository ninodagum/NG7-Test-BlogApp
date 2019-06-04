import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private currentUser: User = null;

  constructor(
  ) { }

  get user(): User{
    return this.currentUser;
  }

  set user(user:User){
    this.currentUser = user;
  }

}
