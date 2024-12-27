import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // Target page component

export const routes: Routes = [
  { path: '', component: LoginComponent },        // Default route (Login)
  { path: 'dashboard', component: DashboardComponent }, // Target page
  { path: '**', redirectTo: '' }                 // Fallback route
];