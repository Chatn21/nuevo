import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto asegura que el servicio esté disponible globalmente
})
export class RegistroService {
  private apiUrl = 'http://localhost/pet/registro'; // URL del backend

  constructor(private http: HttpClient) {}

  registrarEscuela(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
