import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoAntecedenteService {

  urlTipoAntecedente: string = 'http://localhost:8080/api/tipoantecedente';

  constructor(private httpClient: HttpClient) { }

  getTipoAntecedente(): Observable<any> {
    return this.httpClient.get(this.urlTipoAntecedente).pipe(res=>res);
  }

}
