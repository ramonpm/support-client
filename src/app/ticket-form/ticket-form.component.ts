import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket';
import {ActivatedRoute, Router} from '@angular/router';
import {ActiveStateService} from '../active-state.service';
import {Angular2TokenService} from 'angular2-token';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
  providers: [ActiveStateService]
})
export class TicketFormComponent implements OnInit {

  ticket: Ticket = new Ticket();
  editTicket = false;

  constructor(private state: ActiveStateService,
              public _tokenService: Angular2TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.editTicket = this.state.is('edit-ticket');
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this._tokenService.get('tickets/' + id).subscribe(
          res => {
            this.ticket = res.json();
          },
          error => console.log('Error retrieving ticket')
        );
      }
    });
  }

  onSubmit() {
    if (this.editTicket) {
      this._tokenService.put('tickets/' + this.ticket.id, this.ticket).subscribe(
        res => this.router.navigate(['/tickets']),
        error => console.log('Error updating ticket')
      );
    } else {
      this._tokenService.post('tickets', this.ticket).subscribe(
        res => this.router.navigate(['/tickets']),
        error => console.log('Error creating ticket')
      );
    }
  }

}
