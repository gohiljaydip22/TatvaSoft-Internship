import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// Define routes
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },          // Default route
  { path: 'login', component: LoginComponent },                    // Login page route
  { path: 'signup', component: SignupComponent },                  // Signup page route
];
