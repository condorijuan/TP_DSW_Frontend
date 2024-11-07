import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagenInterface } from '../interfaces/imagen.interface.js';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  urlImagenes: string = 'http://localhost:8080/api/imagen';

  constructor(private httpClient: HttpClient) { }

  getImagenes(): Observable<any> {
    return this.httpClient.get(this.urlImagenes).pipe(res=>res);
  }

  addImagen(imagen: ImagenInterface): Observable<void> {
    return this.httpClient.post<void>(`${this.urlImagenes}`, imagen)
  }

  deleteImagen(id: number): Observable<any> {
    return this.httpClient.delete(`${this.urlImagenes}/${id}`).pipe(res => res);    
  }

  getImagen(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.urlImagenes}/${id}`).pipe(res => res);
  }

  updateImagen(id: number, imagen: any): Observable<any> {
    return this.httpClient.put(`${this.urlImagenes}/${id}`, imagen).pipe(res => res);
  }

}
