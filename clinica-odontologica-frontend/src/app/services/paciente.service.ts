import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PacienteInterface } from '../interfaces/paciente.interface.js';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  urlPacientes: string = 'http://localhost:8080/api/paciente';

  constructor(private httpClient: HttpClient) { }

  getPacientes(): Observable<any> {
    return this.httpClient.get(this.urlPacientes).pipe(res => res);
  }

  deletePaciente(id: number): Observable<any> {
    return this.httpClient.delete(`${this.urlPacientes}/${id}`).pipe(res => res);
  }

  addPaciente(paciente: any): Observable<any> {
    return this.httpClient.post(this.urlPacientes, paciente).pipe(res => res);
  }

  getPaciente(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.urlPacientes}/${id}`).pipe(res => res);
  }

  updatePaciente(id: number, paciente: any): Observable<any> {
    return this.httpClient.put(`${this.urlPacientes}/${id}`, paciente).pipe(res => res);
  }
}
