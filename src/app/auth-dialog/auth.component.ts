import {Component, OnInit, Input} from '@angular/core';
import {ActiveStateService} from '../active-state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ActiveStateService]
})
export class AuthComponent implements OnInit {

  login = true;

  constructor(private state: ActiveStateService, private router: Router) {
  }

  ngOnInit() {
    this.login = this.state.is('login');
  }

  onLoginFormResult(e) {
    if (e.signedIn) {
      this.router.navigate(['/tickets']);
    } else {
      alert(e.err.json().errors[0])
    }
  }

  onRegisterFormResult(e) {
    if (e.signedUp) {
      this.router.navigate(['/tickets']);
    } else {
      alert(e.err.json().errors.full_messages[0])
    }
  }

}
