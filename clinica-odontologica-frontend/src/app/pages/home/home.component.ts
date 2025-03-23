import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Odonto System';
  @Input() isAuth!: boolean;
  @Input() isAdmin!: boolean;
  @Output() isAuthChange = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
    this.isAuthChange.emit(false);
  }
}
