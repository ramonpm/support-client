import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Array<Ticket>;

  constructor() {
  }

  ngOnInit() {
  }

}
