import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    if (this.authService.userSignedIn$) {
      this.router.navigate(['/tickets']);
    }
  }

  onSignInSubmit() {
    this.authService.logInUser(this.signInUser).subscribe(
      res => {
        if (res.status === 200) {
          this.onFormResult.emit({signedIn: true, res});
        }
      },
      err => {
        console.log('err:', err);
        this.onFormResult.emit({signedIn: false, err});
      }
    );
  }

}
