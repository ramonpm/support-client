import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UserType} from '../enums/user-type.enum';
import {Angular2TokenService} from 'angular2-token';
import {ActiveStateService} from '../active-state.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [ActiveStateService]
})
export class RegisterFormComponent implements OnInit {

  UserType = UserType;
  signUpUser = {
    id: null,
    email: '',
    password: '',
    passwordConfirmation: '',
    type: UserType.AGENT
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private state: ActiveStateService,
              public _tokenService: Angular2TokenService,
              public authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this._tokenService.get('users/' + id).subscribe(
          res => {
            this.signUpUser = res.json();
          },
          error => console.log('Error retrieving user')
        );
      }
    });
  }

  isAdmin(): boolean {
    return this.state.is('admin-new-user');
  }

  onSignUpSubmit() {
    if (this.isAdmin()) {
      this._tokenService.post('auth', this.signUpUser).subscribe(
        res => this.router.navigate(['/users']),
        error => console.log('Error creating user')
      );
    } else {
      this.authService.registerUser(this.signUpUser).subscribe(
        (res) => {

          if (res.status === 200) {
            this.onFormResult.emit({signedUp: true, res})
          }

        },

        (err) => {
          console.log(err.json());
          this.onFormResult.emit({signedUp: false, err})
        }
      )
    }
  }
}
