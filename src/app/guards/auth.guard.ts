import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Angular2TokenService} from 'angular2-token';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _tokenService: Angular2TokenService,
              private router: Router) {
  }

  canActivate() {
    if (this._tokenService.userSignedIn() && this._tokenService.currentUserData) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
