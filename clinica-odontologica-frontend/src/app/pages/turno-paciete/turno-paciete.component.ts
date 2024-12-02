import { Component } from '@angular/core';
import { TurnoService } from '../../services/turno.service.js';
import { turnoInterface } from '../../interfaces/turno.interface.js';
import { CommonModule } from '@angular/common';
import { PacienteService } from '../../services/paciente.service.js';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-turno-paciete',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './turno-paciete.component.html',
  styleUrl: './turno-paciete.component.css'
})
export class TurnoPacieteComponent {
  turnos: turnoInterface[] = [];
  pacientes: any[] = [];
  constructor(private turnoService: TurnoService, private pacienteService: PacienteService) { }

  ngOnInit() {
    this.getTurnos();
  }

  getTurnos() {
    //despues cambiar por getTurnosbyProfecional
    this.turnoService.getTurnos().subscribe({
      next: (data) => {
        const Listaturnos = data.data;
        this.pacienteService.getPacientes().subscribe({
          next: (ListaPaciente) => {
            this.pacientes = ListaPaciente.data;
            this.turnos = Listaturnos.map((turno: turnoInterface) => {
              const paciente = this.pacientes.find((paciente) => paciente.id === turno.paciente);
              if (paciente) {
                turno.paciente = paciente;
              }
              //arreglar turno.fecha
              turno.fecyhora = this.parseDate(turno.fecyhora.toString());
              console.log(turno.fecyhora);
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

  eliminar(Turno: turnoInterface) {
    if (confirm('¿Estas seguro que deseas eliminar el turno?')) {
      /* this.turnoService.deleteTurno(Turno.id).subscribe({
        next: (data) => {
          console.log(data);
          this.getTurnos();
        },
        error: (error) => {
          console.error(error);
        }
      }); */
      console.log('Eliminado');
    }
  }

  parseDate(dateString: string): Date {
    const datePart = dateString.slice(0, -5);
    const timePart = dateString.slice(-5);
    const formattedDateString = `${datePart}T${timePart}`;

    console.log(formattedDateString);
    return new Date(formattedDateString);
  }
}
