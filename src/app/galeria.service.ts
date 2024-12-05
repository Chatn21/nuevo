import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  private apiUrl = 'http://localhost/pet'; // Cambia esta URL según sea necesario para tu API

  constructor(private http: HttpClient) {}

  // Obtener los items de la galería con paginación
  getItems(page: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/galeria`, { page });
  }

  // Dar un "like" a un ítem de la galería
  likeItem(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/like`, { id });
  }

  // Registrar la visita de un ítem de la galería
  visitItem(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/visit`, { id });
  }
}
