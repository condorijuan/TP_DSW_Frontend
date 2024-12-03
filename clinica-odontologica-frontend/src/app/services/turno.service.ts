import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { turnoInterface } from '../interfaces/turno.interface.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  urlturno: string = 'http://localhost:8080/api/turno';

  constructor(private HttpClient: HttpClient) { }

  getTurnos(): Observable<any> {
    return this.HttpClient.get(this.urlturno).pipe(res => res);
  }

  getTurnosbyId(id: number): Observable<any> {
    return this.HttpClient.get<any>(`${this.urlturno}/${id}`).pipe(res => res);
  }

  getTurnosbyPaciente(id: number): Observable<any> {
    return this.HttpClient.get<any>(`${this.urlturno}/paciente/${id}`).pipe(res => res);
  }

  getTurnosbyProfesional(id: number): Observable<any> {
    return this.HttpClient.get<any>(`${this.urlturno}/profesional/${id}`).pipe(res => res);
  }

  getTurnosbyFecha(fecha: Date): Observable<any> {
    return this.HttpClient.get<any>(`${this.urlturno}/fecha/${fecha}`).pipe(res => res);
  }

  addTurno(turno: turnoInterface): Observable<void> {
    return this.HttpClient.post<void>(`${this.urlturno}`, turno);
  }

  updateTurno(id: number, turno: turnoInterface): Observable<void> {
    return this.HttpClient.put<void>(`${this.urlturno}/${id}`, turno);
  }

  deleteTurno(id: number): Observable<void> {
    return this.HttpClient.delete<void>(`${this.urlturno}/${id}`);
  }
}
