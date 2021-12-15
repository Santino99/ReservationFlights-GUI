import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ""
  password: string = ""

  isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  doLogin(){
    this.authService.authenticate(this.username, this.password).subscribe(
        (response) => {
          sessionStorage.setItem('user', this.username);
          sessionStorage.setItem('key', response.key)
          this.isAuthenticated = true;
          this.router.navigate(['tickets']);
        },
        (error) => {
          this.isAuthenticated = false;
          alert("Login Failed !!!")
        }
    );
  }

  
}
