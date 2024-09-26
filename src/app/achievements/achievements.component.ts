import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent implements OnInit {
  achievements: Array<any> = [];

  ngOnInit(): void {
    this.achievements = [
      {
        titulo: "Desarrollo de aplicación móvil innovadora",
        descripcion: "Lideré el equipo que desarrolló una aplicación móvil que aumentó la eficiencia operativa de la empresa en un 30%.",
        fecha: "2022"
      },
      {
        titulo: "Implementación de sistema de IA",
        descripcion: "Diseñé e implementé un sistema de inteligencia artificial para mejorar la atención al cliente, reduciendo el tiempo de respuesta en un 50%.",
        fecha: "2023"
      },
      {
        titulo: "Optimización de base de datos",
        descripcion: "Realicé una optimización completa de la base de datos principal, mejorando el rendimiento de las consultas en un 40%.",
        fecha: "2021"
      },
      {
        titulo: "Liderazgo en proyecto de migración a la nube",
        descripcion: "Dirigí el proyecto de migración de la infraestructura local a la nube, resultando en un ahorro anual del 25% en costos de TI.",
        fecha: "2022"
      },
      {
        titulo: "Desarrollo de API RESTful",
        descripcion: "Creé una API RESTful completa para integrar sistemas internos y externos, mejorando la interoperabilidad de la empresa.",
        fecha: "2023"
      }
    ];
    console.log('Logros inicializados:', this.achievements);
  }
}