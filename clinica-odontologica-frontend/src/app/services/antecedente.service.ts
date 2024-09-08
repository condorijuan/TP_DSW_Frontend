import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AntecedenteService {

  urlImagenes: string = 'http://localhost:8080/api/antecedente';

  constructor(private httpClient: HttpClient) { }

  getAntecedentes(): Observable<any> {
    return this.httpClient.get(this.urlImagenes).pipe(res=>res);
  }
}
