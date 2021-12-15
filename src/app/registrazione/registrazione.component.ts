import { Component, OnInit } from '@angular/core';
import { RegistrazioneService } from '../services/registrazione.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  username:string=""
  email:string=""
  password:string=""
  ripetiPassword:string=""

  constructor(
    private registrationService: RegistrazioneService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  doRegistration(){
    this.registrationService.registrate(this.username, this.email, this.password, this.ripetiPassword).subscribe(
      response => {
        this.router.navigate(['login']);
      },
      error => {
        alert("Registration Failed !!!")
      }
    );
  }
}
