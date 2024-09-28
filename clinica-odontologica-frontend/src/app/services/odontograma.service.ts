import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OdontogramaService {
  urlPacientes: string = 'http://localhost:8080/api/odontograma';
  constructor(private httpclient: HttpClient) { }

  getOdontogramas(): Observable<any> {
    return this.httpclient.get(this.urlPacientes);
  }
  deleteOdontograma(id: number): Observable<any> {
    return this.httpclient.delete(`${this.urlPacientes}/${id}`).pipe(res => res);
  }
  addOdontograma(paciente: any): Observable<any> {
    return this.httpclient.post(this.urlPacientes, paciente).pipe(res => res);
  }
  getOdontograma(id: number): Observable<any> {
    return this.httpclient.get<any>(`${this.urlPacientes}/${id}`).pipe(res => res);
  }
  updateOdontograma(id: number, paciente: any): Observable<any> {
    return this.httpclient.put(`${this.urlPacientes}/${id}`, paciente).pipe(res => res);
  }
}
