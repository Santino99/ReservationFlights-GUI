import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(username: string, password: string): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      username, 
      password,
    };
    console.log(body)
    return this.httpClient.post(`${environment.API_URL}/auth/login/`, body, {headers,});
  }
}
