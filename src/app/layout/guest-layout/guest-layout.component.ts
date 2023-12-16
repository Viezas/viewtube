import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../components/logo/logo.component';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-guest-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, LogoComponent],
  templateUrl: './guest-layout.component.html',
  styleUrl: './guest-layout.component.css',
})
export class GuestLayoutComponent {
  isAuth: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isAuth = this.userService.isAuthenticated();
  }
}
