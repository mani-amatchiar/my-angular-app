import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  // Define the onLogin method
  onLogin(): void {
    // Example: Navigate to the dashboard
    this.router.navigate(['/dashboard']);
  }
}