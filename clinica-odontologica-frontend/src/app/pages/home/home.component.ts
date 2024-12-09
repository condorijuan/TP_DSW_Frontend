import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

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
  @Output() isAuthChange = new EventEmitter<boolean>();

  logout(){
    localStorage.removeItem('user');
    this.isAuthChange.emit(false);
  }
}
