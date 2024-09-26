import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Array<any> = [];

  ngOnInit(): void {
    this.skills = [
      {
        categoria: "Lenguajes de Programación",
        habilidades: [
          { nombre: "JavaScript", nivel: "Avanzado" },
          { nombre: "Python", nivel: "Intermedio" },
          { nombre: "Java", nivel: "Básico" }
        ]
      },
      {
        categoria: "Frameworks",
        habilidades: [
          { nombre: "Angular", nivel: "Avanzado" },
          { nombre: "React", nivel: "Intermedio" },
          { nombre: "Vue.js", nivel: "Básico" }
        ]
      },
      {
        categoria: "Bases de Datos",
        habilidades: [
          { nombre: "MySQL", nivel: "Avanzado" },
          { nombre: "MongoDB", nivel: "Intermedio" },
          { nombre: "PostgreSQL", nivel: "Básico" }
        ]
      }
    ];

    console.log(this.skills);
  }
}