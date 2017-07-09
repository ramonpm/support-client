import {Component, OnInit, Input} from '@angular/core';
import {ActiveStateService} from '../active-state.service';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ActiveStateService]
})
export class AuthComponent implements OnInit {

  login = true;

  constructor(private state: ActiveStateService) {
  }

  ngOnInit() {
    this.login = this.state.is('login');
  }

}
