import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() isAuth!: boolean;
  @Output() isAuthChange = new EventEmitter<boolean>();
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required]
    });
  }
  notFound!: boolean;

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('Formulario invalido');
      return;
    }
    const profesional = this.loginForm.value;
    console.log(profesional);
    this.authService.login(profesional).subscribe({
      next: (result) => {
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result.data))
        this.isAuthChange.emit(true);
      },
      error: (error) => {
        this.notFound = true;
        console.error(error, 'Error en el login');
      }
    });
    console.log(localStorage.getItem('token'));
    console.log('Formulario enviado');
  }
}
