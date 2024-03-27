import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if user info exists in local storage
    if (localStorage.getItem('user')) {
      return true; // User info exists, allow navigation
    } else {
      // User info doesn't exist, navigate to login
      this.router.navigate(['/']); // Assuming LoginComponent is mapped to '/'
      return false; // Prevent navigation
    }
  }
}
