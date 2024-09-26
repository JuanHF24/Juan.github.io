import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent implements OnInit {
  languages: Array<any> = [];

  ngOnInit(): void {
    this.languages = [
      {
        idioma: "Español",
        nivel: "Nativo",
        certificacion: "N/A"
      },
      {
        idioma: "Inglés",
        nivel: "Avanzado",
        certificacion: "TOEFL iBT 110"
      },
      {
        idioma: "Francés",
        nivel: "Intermedio",
        certificacion: "DELF B2"
      },
      {
        idioma: "Alemán",
        nivel: "Básico",
        certificacion: "Goethe-Zertifikat A2"
      }
    ];
  }
}