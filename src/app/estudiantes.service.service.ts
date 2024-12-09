import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  private apiUrl = 'http://localhost/pet/registro_alumno';

  constructor(private http: HttpClient) {}

  registrarEstudiante(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
