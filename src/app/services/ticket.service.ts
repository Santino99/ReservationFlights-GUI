import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ticket } from '../domain/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(
    private httpClient: HttpClient
  ) {}

  getTickets(){
    const key = sessionStorage.getItem('key')
    const headers = new HttpHeaders().set('Authorization', 'Token ' + key);
    return this.httpClient.get<Ticket[]>(`${environment.API_URL}/tickets`, {headers});
  }

  logout(){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {};
    return this.httpClient.post(`${environment.API_URL}/auth/logout/`, body, {headers,});
  }
}
