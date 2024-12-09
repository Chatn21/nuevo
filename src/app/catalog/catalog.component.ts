import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-catalog',
  standalone: true,
  imports:[
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    CommonModule,
    MatListModule,
    MatSidenavModule,
    RouterModule,


  ],

  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  schools: any[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.loadSchools();
  }


  loadSchools(): void {
    this.catalogService.getSchools().subscribe({
      next: (response) => {
        this.schools = response;
      },
      error: (error) => {
        console.error('Error al cargar el catálogo de escuelas', error);
      },
    });
  }


  onLike(id: number): void {
    this.catalogService.likeSchool(id).subscribe({
      next: () => {
        alert('¡Like registrado!');
        this.loadSchools();
      },
      error: (error) => console.error('Error al realizar Like', error),
    });
  }


  onVisit(id: number): void {
    this.catalogService.visitSchool(id).subscribe({
      next: () => {
        alert('¡Visit registrado!');
        this.loadSchools();
      },
      error: (error) => console.error('Error al realizar Visit', error),
    });
  }
}
