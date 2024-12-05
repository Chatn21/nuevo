import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {

  private apiUrl = 'http://localhost/pet'; // Cambia esta URL según tu backend

  constructor(private http: HttpClient) {}

  getCatalog(page: number, option: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/catalog`, { page, option });
  }

  likeItem(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/like`, { id });
  }

  visitItem(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/visit`, { id });
  }
}


