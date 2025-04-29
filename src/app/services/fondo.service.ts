import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environmentProd} from "../../environments/environment.prod"
import {IUser} from '../components/core/IUser';

@Injectable({
  providedIn: 'root'
})
export class FondoService {
  private apiUrl: string =`${environmentProd.apiServiceUrl}`;
  private userId: string = "cb95b4dc-58be-4c86-a74c-2e8940ef2cc0";

  constructor(private http: HttpClient) {
  }
  getFondos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/funds/read`);
  }

  suscribirFondo( fondoId: string): Observable<any> {
    const notificationType = sessionStorage.getItem('notificationType') || 'email'; // Valor por defecto 'email' si no está en la sesión
    const body = {
      userId: this.userId,
      fundId: fondoId,
      typo: notificationType
    };
    console.log("BODY : ",body);
    console.log("uri: " + this.apiUrl);
    return this.http.post(`${this.apiUrl}/subscribe`, body);
  }


  cancelarSuscripcion(fondoId: string): Observable<any>{
    const notificationType = sessionStorage.getItem('notificationType') || 'email'; // Valor por defecto 'email' si no está en la sesión
    const body = {
      userId: this.userId,
      fundId: fondoId,
      typo: notificationType
    };
    return this.http.post(`${this.apiUrl}/unsubscribe`, body);
  }

  getHistorial(): Observable<IUser[]> {
    return   this.http.get<IUser[]>(`${this.apiUrl}/user/read`);
  }

}
