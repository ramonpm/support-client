import {Component, OnInit} from '@angular/core';
import {Angular2TokenService} from 'angular2-token';
import {User} from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User>;
  loggedUser: any = {};

  constructor(private _tokenService: Angular2TokenService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._tokenService.get('users').subscribe(
      res => {
        this.users = res.json();
        this.loggedUser = this._tokenService.currentUserData;
      },
      error => console.log('Error retrieving users')
    );
  }

  deleteUser(user: User) {
    this._tokenService.delete('users/' + user.id).subscribe(
      res => this.users.splice(this.users.indexOf(user), 1),
      error => console.log('Error deleting user.')
    );
  }
}
