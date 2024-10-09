import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {IUser} from '../components/core/IUser';

@Injectable({
  providedIn: 'root'
})
export class FondoService {
  private apiUrl: string = 'http://localhost:8080/rest/api';
  private userId: string = "b57dfe3d-cc60-47e0-bc62-bce22178c4d5";

  constructor(private http: HttpClient) {
  }
  getFondos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/funds/read`);
  }

  suscribirFondo( fondoId: string): Observable<any> {
    const body = {
      userId: this.userId,
      fundId: fondoId
    };
    console.log("BODY : ",body);
    console.log("uri: " + this.apiUrl);
    return this.http.post(`${this.apiUrl}/subscribe`, body);
  }


  cancelarSuscripcion(fondoId: string): Observable<any>{
    const body = {
      userId: this.userId,
      fundId: fondoId
    };
    return this.http.post(`${this.apiUrl}/unsubscribe`, body);
  }

  getHistorial(): Observable<IUser[]> {
    return   this.http.get<IUser[]>(`${this.apiUrl}/user/read`);
  }

}
