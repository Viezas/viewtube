import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/client/dashboard/dashboard.component';
import { IndexComponent as VideoIndex } from './pages/client/video/index/index.component';
import { FormComponent as VideoForm } from './pages/client/video/form/form.component';
import { ShowComponent as ShowVideo } from './pages/video/show/show.component';
import { authGuard } from './guard/auth/auth.guard';
import { guestGuard } from './guard/guest/guest.guard';

export const routes: Routes = [
  { path: '', title: 'Home', component: LandingComponent },
  { path: 'video/:id', title: 'Home', component: ShowVideo },
  { path: 'login', title: 'Login', canActivate: [guestGuard], component: LoginComponent },
  { path: 'register', title: 'Register', canActivate: [guestGuard], component: RegisterComponent },
  { path: 'dashboard', title: 'Dashboard', canActivate: [authGuard], component: DashboardComponent },
  { path: 'videos', title: 'Videos', canActivate: [authGuard], component: VideoIndex },
  { path: 'videos/create', title: 'Videos - upload', canActivate: [authGuard], component: VideoForm },
  { path: 'videos/:id', title: 'Videos - edit', canActivate: [authGuard], component: VideoForm },
  { path: '**', redirectTo: '' },
];
