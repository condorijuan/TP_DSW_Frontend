import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service.js';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TurnoService } from '../../services/turno.service.js';

@Component({
  selector: 'app-turno',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './turno.component.html',
  styleUrl: './turno.component.css'
})
export class TurnoComponent {
  turnoForm: FormGroup;
  pacientes: any[] = [];

  constructor(private fb: FormBuilder, private pacienteService: PacienteService, private turnoService: TurnoService) {
    this.turnoForm = this.fb.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      paciente: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.pacienteService.getPacientes().subscribe({
      next: (data) => {
        console.log(data);
        this.pacientes = data.data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  onSubmit() {
    console.log(this.turnoForm.value);
    if (this.turnoForm.invalid) {
      console.log('Formulario valido');
      return;
    }
    const turno = {
      fecyhora: this.turnoForm.value.fecha + this.turnoForm.value.hora,
      descripcion: "",
      precio: 0,
      entrega: "",
      paciente: this.turnoForm.value.paciente,
      diente: null,
      imagenes: "",
      profecional: ""
    };
    console.log(turno);
    //verifico que no exista un turno en la misma fecha y hora
    if (!this.turnoService.getTurnosbyFecha(turno.fecyhora)) {
      console.log('Ya existe un turno en la misma fecha y hora');
      return;
    }
    this.turnoService.addTurno(turno).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  onNoClick() {
    console.log('Cancelar');
  }
}
