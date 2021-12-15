import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {

  constructor(
    private httpClient: HttpClient
  ) { }

  registrate(username: string, email: string, password1: string, password2: string): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      username,
      email, 
      password1,
      password2
    };
    return this.httpClient.post(`${environment.API_URL}/auth/registration/`, body, {headers,});
  }
}

