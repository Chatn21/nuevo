// src/app/services/register.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost/pet/register'; // La URL de tu backend PHP

  constructor(private http: HttpClient) {}

  registerUser(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Indicar que estamos enviando JSON
    });

    return this.http.post<any>(this.apiUrl, formData, { headers });
  }
}
