import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket';
import {Angular2TokenService} from 'angular2-token';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Array<Ticket>;

  constructor(private _tokenService: Angular2TokenService) {
  }

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    this._tokenService.get('tickets').subscribe(
      res => this.tickets = res.json(),
      error => console.log('Error retrieving tickets')
    );
  }

  deleteTicket(ticket: Ticket) {
    this._tokenService.delete('tickets/' + ticket.id).subscribe(
      res => this.tickets.splice(this.tickets.indexOf(ticket), 1),
      error => console.log('Error deleting ticket.')
    );
  }

}
