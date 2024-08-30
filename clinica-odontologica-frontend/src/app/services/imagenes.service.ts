import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  urlImagenes: string = 'http://localhost:8080/api/imagen';

  constructor(private httpClient: HttpClient) { }

  getImagenes(): Observable<any> {
    return this.httpClient.get(this.urlImagenes).pipe(res=>res);
  }
}
