import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service.js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() isAuth!: boolean;
  @Input() isAdmin!: boolean;
  @Output() isAuthChange = new EventEmitter<boolean>();
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private usuarioService: UsuarioService) {
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
        localStorage.setItem('token', result.token);
        /* localStorage.setItem('user', JSON.stringify(result.data)) */
        if (result.data.tipo === 'admin') {
          this.isAdmin = true;
        }
        if (result.data.profesional !== undefined) {
          this.usuarioService.getProfesional(result.data.profesional.id).subscribe({
            next: (result) => {
              localStorage.setItem('user', JSON.stringify(result.data));
            }
          });
        }
        this.isAuthChange.emit(true);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.notFound = true;
        console.error(error, 'Error en el login');
      }
    });
    console.log('Formulario enviado');
  }
}
