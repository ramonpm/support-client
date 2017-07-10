import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket';
import {Angular2TokenService} from 'angular2-token';
import {TicketStatus} from '../enums/ticket-status.enum';
import {Answer} from '../models/answer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ticket-show',
  templateUrl: './ticket-show.component.html',
  styleUrls: ['./ticket-show.component.css']
})
export class TicketShowComponent implements OnInit {

  ticket: Ticket = new Ticket();
  answers: Array<Answer> = [];
  newAnswer: Answer = new Answer();

  constructor(private route: ActivatedRoute,
              private _tokenService: Angular2TokenService) {
  }

  ngOnInit() {
    this.getTicket();
  }

  getTicket() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this._tokenService.get('tickets/' + id).subscribe(
          res => {
            this.ticket = res.json();
            this.initNewAnswer();
            this.getAnswers();
          },
          error => console.log('Error retrieving ticket')
        );
      }
    });
  }

  onAnswerSubmit() {
    this._tokenService.post('tickets/' + this.ticket.id + '/answers', this.newAnswer).subscribe(
      res => {
        this.answers.push(res.json());
        this.initNewAnswer();
      },
      error => console.log('Error creating answer')
    );
  }

  getAnswers() {
    this._tokenService.get('tickets/' + this.ticket.id + '/answers').subscribe(
      res => this.answers = res.json(),
      error => console.log('Error retrieving answers')
    );
  }

  initNewAnswer() {
    this.newAnswer.ticket_id = this.ticket.id;
    this.newAnswer.message = '';
  }

}
