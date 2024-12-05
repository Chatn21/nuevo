import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../galeria.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatPaginatorModule,
  CommonModule,

  ],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  items: any[] = [];
  totalItems: number = 0;

  constructor(private galeriaService: GaleriaService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(page: number = 1): void {
    this.galeriaService.getItems(page).subscribe(response => {
      this.items = response.items;
      this.totalItems = response.totalItems;
    });
  }

  onPageChange(event: any): void {
    this.loadItems(event.pageIndex + 1); // Ajusta el índice de la página
  }

  likeItem(id: number): void {
    this.galeriaService.likeItem(id).subscribe(response => {
      console.log('Item liked', response);
    });
  }

  visitItem(id: number): void {
    this.galeriaService.visitItem(id).subscribe(response => {
      console.log('Item visited', response);
    });
  }
}
