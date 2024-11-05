import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarasService {
  urlCaras: string = 'http://localhost:8080/api/cara';
  constructor(private httpclient: HttpClient) { }

  getCaras(): Observable<any> {
    return this.httpclient.get(this.urlCaras);
  }

  getCaraById_Diente(id: number): Observable<any> {
    return this.httpclient.get(`${this.urlCaras}/diente/${id}`);
  }

  updateCara(id: number, cara: any): Observable<any> {
    return this.httpclient.put(`${this.urlCaras}/${id}`, cara);
  }

  getcarabyid(id: number): Observable<any> {
    return this.httpclient.get(`${this.urlCaras}/${id}`);
  }
}
