import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket';
import {Router} from '@angular/router';
import {ActiveStateService} from '../active-state.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
  providers: [ActiveStateService]
})
export class TicketFormComponent implements OnInit {

  ticket: Ticket = new Ticket();
  editTicket = false;

  constructor(private state: ActiveStateService, private router: Router) {
  }

  ngOnInit() {
    this.editTicket = this.state.is('edit-ticket');
  }

  onSubmit() {

  }

}
