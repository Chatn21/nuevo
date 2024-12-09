import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost/pet/estudiantes';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any[]> {
    return this.http.post<any[]>('http://localhost/pet/estudiantes', {});
  }
}
