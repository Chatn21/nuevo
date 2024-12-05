import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../register.service';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private registerService: RegisterService, private fb: FormBuilder) {
    // Inicializar el formulario con validaciones
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
      return;
    }

    const formData = this.registerForm.value;

    // Llamar al servicio para registrar el usuario
    this.registerService.registerUser(formData).subscribe({
      next: (response) => {
        console.log('Usuario registrado:', response);
        this.onRegisterSuccess();
        alert('Registro exitoso');

      },
      error: (error) => {
        console.error('Error en el registro:', error);
        this.errorMessage = error.error.message || 'Ocurrió un error al registrar el usuario.';
      }
    });
  }
  onRegisterSuccess() {
    // Redirige al login utilizando window.location
    window.location.href = '/login'; // Esto cambiará la URL de la página directamente
  }
}

