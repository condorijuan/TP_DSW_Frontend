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

}
