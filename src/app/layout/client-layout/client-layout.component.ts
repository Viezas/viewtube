import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../components/logo/logo.component';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [CommonModule, LogoComponent, RouterLink],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.css',
})
export class ClientLayoutComponent {
  currentRoute!: String;

  constructor(private router: Router, private userService: UserService) {
    this.currentRoute = this.router.url;
  }

  logout() {
    if (this.userService.logout()) {
      this.router.navigate(['/']);
    }
  }
}
