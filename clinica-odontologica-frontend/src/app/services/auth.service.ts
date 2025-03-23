import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profecionalInterface } from '../interfaces/profecional.interface.js';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;
  private isAdmin = false;
  private URL_LOGIN: string = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient, private router: Router) { }

  login(profecional: profecionalInterface): Observable<any> {
    /* return this.http.post<any>(`${this.URL}/login`, profecional) */
    return this.http.post<any>(`${this.URL_LOGIN}/login`, profecional);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isAuth = false;
    this.isAdmin = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}
