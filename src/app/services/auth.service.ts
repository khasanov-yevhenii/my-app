import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get isAuthenticated(): boolean {
    return true;
  }
}
