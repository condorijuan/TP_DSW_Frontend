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
  private URL: string = 'http://localhost:8080/api/profesional';

  constructor(private http: HttpClient, private router: Router) { }

  getOneProfesional(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/${id}`).pipe(res => res
    );
  }

  login(profecional: profecionalInterface): Observable<any> {
    return this.http.post<any>(`${this.URL}/login`, profecional)
  }

  logout() {
    localStorage.removeItem('user');
    this.isAuth = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}
