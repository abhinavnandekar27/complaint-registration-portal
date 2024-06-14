import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private isAdmin = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    if (username === 'abhinavuser' && password === 'abhinavuser') {
      this.loggedIn = true;
      this.isAdmin = false;
      return true;
    } else if (username === 'abhinavadmin' && password === 'abhinavadmin') {
      this.loggedIn = true;
      this.isAdmin = true;
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn = false;
    this.isAdmin = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  isAdminLoggedIn(): boolean {
    return this.loggedIn && this.isAdmin;
  }
}
