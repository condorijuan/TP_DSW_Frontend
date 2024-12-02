import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { TurnoService } from '../../services/turno.service.js';
import { turnoInterface } from '../../interfaces/turno.interface.js';

@Component({
  selector: 'app-editar-turno',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './editar-turno.component.html',
  styleUrl: './editar-turno.component.css'
})
export class EditarTurnoComponent {

  id_turno: string = '';
  formTurno: FormGroup;
  turnoInfo: turnoInterface = {
    id: null,
    fecyhora: new Date(),
    descripcion: "",
    precio: 0,
    entrega: "",
    paciente: null,
    diente: "",
    imagenes: "",
    profecional: ""
  };
  constructor(private route: ActivatedRoute, private turnoService: TurnoService, private fb: FormBuilder) {
    this.formTurno = this.fb.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      paciente: ['', Validators.required],
      estado: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.id_turno = params['id'];
    });
    this.getTurno();
  }

  getTurno() {
    return this.turnoService.getTurnosbyId(Number(this.id_turno)).subscribe(result => {
      console.log(result);
      this.turnoInfo = result.data;
      const fecha = this.parseDate(result.data.fecyhora.toString());
      this.formTurno.setValue(
        {
          fecha: fecha.toISOString().split('T')[0],
          hora: fecha.toTimeString().split(' ')[0],
          paciente: result.data.paciente,
          estado: result.data.entrega,
          precio: result.data.precio,
        }
      );
    });
  }

  editarTurno() {
    if (this.formTurno.invalid) {
      console.log('Formulario invalido');
      return;
    }
    const turno = {
      id: Number(this.id_turno),
      fecyhora: this.formTurno.value.fecha + this.formTurno.value.hora,
      descripcion: this.formTurno.value.descripcion,
      precio: this.formTurno.value.precio,
      entrega: this.formTurno.value.estado,
      paciente: this.formTurno.value.paciente,
      diente: this.turnoInfo.diente,
      imagenes: this.turnoInfo.imagenes,
      profecional: this.turnoInfo.profecional
    };
    console.log(turno);
    this.turnoService.updateTurno(turno.id, turno).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  parseDate(dateString: string): Date {
    const datePart = dateString.slice(0, -5);
    const timePart = dateString.slice(-5);
    const formattedDateString = `${datePart}T${timePart}`;
    console.log(formattedDateString);
    return new Date(formattedDateString);
  }
}
