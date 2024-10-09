import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FondoService {
  private apiUrl: string = 'http://localhost:8080/rest/api';

  constructor(private http: HttpClient) {
  }
  getFondos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/funds/read`);
  }



}
