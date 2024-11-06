import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DientesService {
  urlDientes: string = 'http://localhost:8080/api/diente';
  constructor(private httpclient: HttpClient) { }

  getDientes(): Observable<any> {
    return this.httpclient.get(this.urlDientes);
  }

  getDienteById_Odontograma(id: number): Observable<any> {
    return this.httpclient.get(`${this.urlDientes}/odontograma/${id}`);
  }

  getDiente(id: number): Observable<any> {
    return this.httpclient.get<any>(`${this.urlDientes}/${id}`);
  }

  updateDiente(id: number, diente: any): Observable<any> {
    return this.httpclient.put(`${this.urlDientes}/${id}`, diente);
  }

  deleteDiente(id: number): Observable<any> {
    return this.httpclient.delete(`${this.urlDientes}/${id}`);
  }

  addDiente(diente: any): Observable<any> {
    return this.httpclient.post(this.urlDientes, diente).pipe(res => res);
  }

}
