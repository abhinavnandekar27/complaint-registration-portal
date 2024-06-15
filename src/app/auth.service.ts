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
    if (username === 'user' && password === 'user') {
      this.loggedIn = true;
      this.isAdmin = false;
      return true;
    } else if (username === 'admin' && password === 'admin') {
      this.loggedIn = true;
      this.isAdmin = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.isAdmin = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getAdminStatus(): boolean {
    return this.isAdmin;
  }
}
