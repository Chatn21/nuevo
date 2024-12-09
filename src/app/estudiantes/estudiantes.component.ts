import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudiantesService } from '../estudiantes.service.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent implements OnInit {
  formulario!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private estudiantesService: EstudiantesService
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      id_escuela: ['', Validators.required],
      nombre_alumno: ['', Validators.required],
      apellido_alumno: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: [''],
      datos_tutor: [''],
      curso_actual: ['']
    });
  }

  guardarEstudiante(): void {
    if (this.formulario.valid) {
      this.estudiantesService.registrarEstudiante(this.formulario.value)
        .subscribe(
          (response) => {
            console.log('Registro exitoso:', response);
            alert('Estudiante registrado exitosamente');
          },
          (error) => {
            console.error('Error al registrar el estudiante', error);
            alert('Hubo un error al registrar el estudiante');
          }
        );
    } else {
      alert('Por favor, complete todos los campos obligatorios');
    }
  }
}
