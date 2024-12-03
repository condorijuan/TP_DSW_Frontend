import { Component } from '@angular/core';
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
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('Formulario invalido');
      return;
    }
    const profecional = this.loginForm.value;
    console.log(profecional);
    this.authService.login(profecional).subscribe({
      next: (data) => {
        console.log('Login correcto');
        console.log(data);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error(error, 'Error en el login');
      }
    });
    console.log(localStorage.getItem('token'));
    console.log('Formulario enviado');
  }
}
