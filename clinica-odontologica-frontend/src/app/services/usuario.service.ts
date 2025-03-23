import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profecionalInterface } from '../interfaces/profecional.interface.js';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private URL: string = 'http://localhost:8080/api/profesional';

  constructor(private http: HttpClient, private router: Router) { }

  getProfesional(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/${id}`).pipe(res => res
    );
  }
}
