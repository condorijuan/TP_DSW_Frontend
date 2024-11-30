import { Component } from '@angular/core';
import { TurnoService } from '../../services/turno.service.js';
import { turnoInterface } from '../../interfaces/turno.interface.js';
import { CommonModule } from '@angular/common';
import { PacienteService } from '../../services/paciente.service.js';

@Component({
  selector: 'app-turno-paciete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './turno-paciete.component.html',
  styleUrl: './turno-paciete.component.css'
})
export class TurnoPacieteComponent {

  turnos: turnoInterface[] = [];
  pacientes: any[] = [];
  constructor(private turnoService: TurnoService, private pacienteService: PacienteService) { }

  ngOnInit() {
    //despues cambiar por getTurnosbyProfecional
    this.turnoService.getTurnos().subscribe({
      next: (data) => {
        const Listaturnos = data.data;
        this.pacienteService.getPacientes().subscribe({
          next: (ListaPaciente) => {
            console.log(ListaPaciente.data);
            console.log(Listaturnos);
            this.pacientes = ListaPaciente.data;
            this.turnos = Listaturnos.map((turno: turnoInterface) => {
              const paciente = this.pacientes.find((paciente) => paciente.id === turno.paciente);
              if (paciente) {
                turno.paciente = paciente;
              }
              //arreglar turno.fecha
              console.log(turno.fecyhora.toString());
              turno.fecyhora = this.parseDate(turno.fecyhora.toString());
              return turno;
            })
            console.log(this.turnos);
          },
          error: (error) => {
            console.error(error);
          }
        });
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  editar(Turno: turnoInterface) {
    console.log(Turno);
  }

  eliminar(Turno: turnoInterface) {
    console.log(Turno);
  }

  parseDate(dateString: string): Date {
    const datePart = dateString.slice(0, -5);
    const timePart = dateString.slice(-5);
    const formattedDateString = `${datePart}T${timePart}Z`;
    console.log(formattedDateString);
    return new Date(formattedDateString);
  }
}
