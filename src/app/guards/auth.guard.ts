import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {
  }

  canActivate(): boolean {
    return this.authService.isAuthenticated;
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
