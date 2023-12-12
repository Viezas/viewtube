import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/client/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: LandingComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'register', title: 'Register', component: RegisterComponent },
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' },
];
