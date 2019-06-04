import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';
import { path_home } from 'src/app/modules/home/home.routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(){
    console.log('submitting...');
    const onLoginSuccess = (user: User) => {
        this.userService.user = user;
        this.router.navigateByUrl(path_home);
    }
    this.authenticationService.login(this.username, this.password, onLoginSuccess);
  }
}
