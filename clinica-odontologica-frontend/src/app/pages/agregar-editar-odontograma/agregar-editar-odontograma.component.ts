import { Component, Inject, inject } from '@angular/core';
import { MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OdontogramaService } from '../../services/odontograma.service.js';

@Component({
  selector: 'app-agregar-editar-odontograma',
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
  templateUrl: './agregar-editar-odontograma.component.html',
  styleUrl: './agregar-editar-odontograma.component.css'
})
export class AgregarEditarOdontogramaComponent {
  rellenado: string = 'Agregar ';
  id: number | undefined;
  form: FormGroup;
  constructor(private fb: FormBuilder, private OdontogramaService: OdontogramaService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      descripcion: ['', Validators.required],
      link: ['', Validators.required],
    });
    this.id = data.id;
  }

  readonly dialogRef = inject(MatDialogRef<AgregarEditarOdontogramaComponent>);

  ngOnInit(): void {
    if (this.id !== undefined) {
      this.rellenado = 'Editar';
      this.OdontogramaService.getOdontograma(this.id).subscribe({
        next: (result) => {
          console.log(result);
          console.log(result.data.descripcion);
          this.form.setValue(
            {
              descripcion: result.data.descripcion,
              link: result.data.link,
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
    const odontograma = {
      descripcion: this.form.value.descripcion,
      link: this.form.value.link,
      fecha: new Date(),
    }
    console.log(this.form);

    if (this.id !== undefined) {
      this.OdontogramaService.updateOdontograma(this.id, odontograma).subscribe({
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

      this.OdontogramaService.addOdontograma(odontograma).subscribe({
        next: (result) => {
          console.log(result);
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error adding odontograma:', err);
        }
      })
    }
  }
}
