import { Component } from '@angular/core';
import { PacienteInterface } from '../../interfaces/paciente.interface.js';
import { PacienteService } from '../../services/paciente.service.js';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})
export class PacienteComponent {

  pacientesList: PacienteInterface[] = [];
  constructor(private PacienteService: PacienteService) { }

  ngOnInit(): void {
    console.log("Hola");
    this.getPacientes();
  }

  getPacientes() {
    this.PacienteService.getPacientes().subscribe({
      next: (result) => {
        this.pacientesList = result.data;
        console.log(result);
        console.log(result.paciente);
        console.log(result.data);
        console.log(this.pacientesList);
        console.log("Hola Mundo");
      },
      error: (err) => {
        console.error('Error fetching pacientes:', err);
      }
    })
  }
}
