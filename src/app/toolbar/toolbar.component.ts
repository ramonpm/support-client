import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {Angular2TokenService} from 'angular2-token';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isAdmin = false;

  constructor(public authService: AuthService,
              public authTokenService: Angular2TokenService,
              private router: Router) {
  }

  ngOnInit() {
    this.isAdmin = this.authTokenService.currentUserData && this.authTokenService.currentUserData['admin'];
  }

  logOut() {
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

}
