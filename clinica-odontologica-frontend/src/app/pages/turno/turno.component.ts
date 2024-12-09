import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service.js';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TurnoService } from '../../services/turno.service.js';
import { Router } from '@angular/router';
import { profecionalInterface } from '../../interfaces/profecional.interface.js';
import { dateValidator } from './date.validator.js';
import { hourValidator } from './time.validator.js';

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
  profesional: profecionalInterface = JSON.parse(localStorage.getItem('user') || '{}')

  constructor(private fb: FormBuilder, private pacienteService: PacienteService, private turnoService: TurnoService, private router: Router) {
    this.turnoForm = this.fb.group({
      profesional: [this.profesional.id],
      fecha: ['', [Validators.required, dateValidator(this.profesional.turnos)]],
      hora: ['', [Validators.required, Validators.pattern('^(0[0-9]|1[0-9]|2[0-3]):00(?::00)?$')]],
      descripcion: [''],
      precio: [0],
      entrega: ['Reservado'],
      diente: [null],
      imagenes: "",
      paciente: ['', Validators.required]
    },
    {
      Validators: hourValidator(this.profesional.turnos)
    });
  }

  ngOnInit() {
    this.pacienteService.getPacientes().subscribe({
      next: (result) => {
        console.log(result);
        this.pacientes = result.data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  fixDate(): void {
    const browserDate = new Date(this.turnoForm.get('fecha')?.value);
    const selectedDate = new Date(
      browserDate.getUTCFullYear(), 
      browserDate.getUTCMonth(), 
      browserDate.getUTCDate()
    );

    this.turnoForm.patchValue({
      fecha: selectedDate,
    })
  }

  onSubmit() {
    console.log(this.turnoForm.value);
    if (this.turnoForm.invalid) {
      console.log('Formulario valido');
      return;
    }

    //verifico que no exista un turno en la misma fecha y hora
    /*
    if (!this.turnoService.getTurnosbyFecha(turno.fecyhora)) {
      console.log('Ya existe un turno en la misma fecha y hora');
      return;
    }
     */

    this.turnoService.addTurno(this.turnoForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  onNoClick() {
    //redireccion a la pagina principal
    this.router.navigate(['/home']);
  }
}
