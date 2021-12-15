import { Component, OnInit } from '@angular/core';
import { Ticket } from '../domain/Ticket';
import { TicketService } from '../services/ticket.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[] = []
  user: any = sessionStorage.getItem('user')
  
  constructor(
    private ticketService:TicketService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
      response => this.tickets=response
    )
  }

  doLogout(){
    this.ticketService.logout().subscribe(
      response => {
        sessionStorage.removeItem('key')
        sessionStorage.removeItem('user')
        this.router.navigate(['login']);
      }
    );
  }
}
