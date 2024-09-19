import { Component, Inject, inject } from '@angular/core';
import { MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-agregar-editar-paciente',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
  ],
  templateUrl: './agregar-editar-paciente.component.html',
  styleUrl: './agregar-editar-paciente.component.css'
})
export class AgregarEditarPacienteComponent {
  rellenado: string = 'Agregar ';
  id: number | undefined;
  form: FormGroup;
  constructor(private fb: FormBuilder, private pacienteService: PacienteService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.id = data.id;
  }

  readonly dialogRef = inject(MatDialogRef<AgregarEditarPacienteComponent>);

  ngOnInit(): void {
    if (this.id !== undefined) {
      this.rellenado = 'Editar';
      this.pacienteService.getPaciente(this.id).subscribe({
        next: (result) => {
          console.log(result);
          console.log(result.data.nombre);
          this.form.setValue(
            {
              nombre: result.data.nombre,
              apellido: result.data.apellido,
              genero: result.data.genero,
              direccion: result.data.direccion,
              telefono: result.data.telefono,
              email: result.data.email,
            }
          );
        },
        error: (err) => {
          console.error('Error fetching paciente:', err);
        }
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  agregarEditarPaciente() {
    if (this.form.invalid) {
      return;
    }
    //creacion del objeto paciente
    const paciente = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      genero: this.form.value.genero,
      direccion: this.form.value.direccion,
      telefono: this.form.value.telefono,
      email: this.form.value.email,
    }
    console.log(this.form);

    if (this.id !== undefined) {
      this.pacienteService.updatePaciente(this.id, paciente).subscribe({
        next: (result) => {
          console.log(result);
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error updating paciente:', err);
        }
      })
      return;
    } else {

      this.pacienteService.addPaciente(paciente).subscribe({
        next: (result) => {
          console.log(result);
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error adding paciente:', err);
        }
      })
    }
  }
}
