import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private apiUrl = 'http://localhost/pet';

  constructor(private http: HttpClient) {}


  getSchools(page: number = 1): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/catalog`, { page });
  }

  likeSchool(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/like`, { id });
  }


  visitSchool(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/visit`, { id });
  }
}

