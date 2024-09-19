import { Component, inject } from '@angular/core';
import { PacienteInterface } from '../../interfaces/paciente.interface.js';
import { PacienteService } from '../../services/paciente.service.js';
import { AgregarEditarPacienteComponent } from '../agregar-editar-paciente/agregar-editar-paciente.component.js';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})
export class PacienteComponent {
  readonly dialog = inject(MatDialog);
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

  deletePaciente(id: number) {
    console.log(id);
    this.PacienteService.deletePaciente(id).subscribe({
      next: (result) => {
        console.log(result);
        this.getPacientes();
      },
      error: (err) => {
        console.error('Error deleting paciente:', err);
      }
    })
  }

  AgregarEditar(id?: number) {

    const dialogRef = this.dialog.open(AgregarEditarPacienteComponent, {
      width: '550px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('formulario cerrado');
      if (result) {
        this.getPacientes();
      }
    });
  }
}
