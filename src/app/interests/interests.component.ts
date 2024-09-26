import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Interes {
  categoria: string;
  items: string[];
}

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent implements OnInit {
  interests: Interes[] = [];

  ngOnInit(): void {
    this.interests = [
      {
        categoria: 'Tecnología',
        items: ['Desarrollo web', 'Inteligencia artificial', 'Blockchain', 'Internet de las cosas']
      },
      {
        categoria: 'Deportes',
        items: ['Fútbol', 'Baloncesto', 'Tenis', 'Natación']
      },
      {
        categoria: 'Artes',
        items: ['Pintura', 'Fotografía', 'Escultura', 'Cine']
      },
      {
        categoria: 'Ciencia',
        items: ['Astronomía', 'Biología', 'Física cuántica', 'Neurociencia']
      },
      {
        categoria: 'Viajes',
        items: ['Mochilero', 'Turismo cultural', 'Ecoturismo', 'Gastronomía local']
      }
    ];
  }
}