import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/client/dashboard/dashboard.component';
import { IndexComponent as VideoIndex } from './pages/client/video/index/index.component';
import { FormComponent as VideoForm } from './pages/client/video/form/form.component';
import { ShowComponent } from './pages/client/video/show/show.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: LandingComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'register', title: 'Register', component: RegisterComponent },
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
  { path: 'videos', title: 'Videos', component: VideoIndex },
  { path: 'videos/create', title: 'Videos - upload', component: VideoForm },
  { path: 'videos/:id', title: 'Videos - edit', component: VideoForm },
  { path: 'show/:id', title: 'Video - show n°', component: ShowComponent },
  { path: '**', redirectTo: '' },
];
