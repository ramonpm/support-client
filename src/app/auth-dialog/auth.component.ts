import {Component, OnInit} from '@angular/core';
import {ActiveStateService} from '../active-state.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ActiveStateService]
})
export class AuthComponent implements OnInit {

  login = true;

  constructor(private state: ActiveStateService,
              private authService: AuthService,
              private router: Router) {
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
      this.authService.logOutUser().subscribe(
        res => this.router.navigate(['/login']),
        err => alert(err)
      );
    } else {
      alert(e.err.json().errors.full_messages[0])
    }
  }

}
