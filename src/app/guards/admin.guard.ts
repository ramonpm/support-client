import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Angular2TokenService} from 'angular2-token';
import {environment} from '../../environments/environment';
import {UserType} from '../enums/user-type.enum';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private authTokenService: Angular2TokenService,
              private router: Router) {
  }

  canActivate() {
    if (this.authTokenService.currentUserData && (this.authTokenService.currentUserData['type'] === UserType.ADMIN)) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
