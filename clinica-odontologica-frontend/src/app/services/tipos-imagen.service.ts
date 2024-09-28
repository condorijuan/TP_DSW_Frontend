import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TiposImagenInterface } from '../interfaces/tipos-imagen.interface.js';

@Injectable({
  providedIn: 'root'
})
export class TiposImagenService {

  urlTiposImagen: string = 'http://localhost:8080/api/tipoImagen';

  constructor(private httpClient: HttpClient) { }

  getTiposImagen(): Observable<any> {
    return this.httpClient.get(this.urlTiposImagen).pipe(res=>res);
  }

  addTipoImagen(tipoImagen: TiposImagenInterface): Observable<void> {
    return this.httpClient.post<void>(`${this.urlTiposImagen}`, tipoImagen);
  }

  deleteTiposImagen(id: number): Observable<any> {
    return this.httpClient.delete(`${this.urlTiposImagen}/${id}`).pipe(res => res);
  }

  getTipoImagen(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.urlTiposImagen}/${id}`).pipe(res => res);
  }

  updateTipoImagen(id: number, tipoImagen: any): Observable<any> {
    return this.httpClient.put(`${this.urlTiposImagen}/${id}`, tipoImagen).pipe(res => res);
  }

}
