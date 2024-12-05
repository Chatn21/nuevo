import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';



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


  ],

  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  catalog: any[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.loadCatalog(1);
  }

  loadCatalog(page: number): void {
    this.catalogService.getCatalog(page, 1).subscribe(
      (response) => {
        this.catalog = response;
      },
      (error) => {
        console.error('Error al cargar el catálogo', error);
      }
    );
  }

  likeItem(id: number): void {
    this.catalogService.likeItem(id).subscribe(
      (response) => {
        console.log('Like registrado:', response);
      },
      (error) => {
        console.error('Error al registrar el like', error);
      }
    );
  }

  visitItem(id: number): void {
    this.catalogService.visitItem(id).subscribe(
      (response) => {
        console.log('Visita registrada:', response);
      },
      (error) => {
        console.error('Error al registrar la visita', error);
      }
    );
  }
}
