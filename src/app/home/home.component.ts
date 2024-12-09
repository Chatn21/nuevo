import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { RegistroService } from '../registro.service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private registroService: RegistroService) {
    this.registroForm = this.fb.group({
      nombre_escuela: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ciudad: ['', Validators.required],
      estado: ['', Validators.required],
      codigoPostal: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      this.registroService.registrarEscuela(this.registroForm.value).subscribe(
        (response) => {
          alert('Escuela registrada exitosamente');
        },
        (error) => {
          alert('Error al registrar la escuela: ' + error.error.message);
        }
      );
    } else {
      alert('Por favor completa todos los campos requeridos.');
    }
  }
}
