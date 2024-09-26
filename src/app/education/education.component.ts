import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Array<any> = [];

  ngOnInit(): void {
    let education1 = {
      fechaInicio: "2017",
      fechaFin: "2020",
      facultad: "Tecnico en Programacion",
      universidad: "Cbtis 47"
    };
    let education2 = {
      fechaInicio: "2021",
      fechaFin: "2024",
      facultad: "Negocios y Tecnologias",
      universidad: "Universidad Veracruzana"
    };

    this.educationList.push(education1);
    this.educationList.push(education2);
  }
}