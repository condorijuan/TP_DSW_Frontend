import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dienteInterface } from '../../interfaces/diente.interface.js';
import { DientesService } from '../../services/dientes.service.js';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-editar-dientes',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './editar-dientes.component.html',
  styleUrls: ['./editar-dientes.component.css']
})
export class EditarDientesComponent {
  formGroup: FormGroup;
  operacion: string = 'Agregar ';
  id: number | undefined;

  errorMessage: string | undefined;

  constructor(public dialogRef: MatDialogRef<EditarDientesComponent>,
    private fb: FormBuilder, private DientesService: DientesService, private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formGroup = this.fb.group({
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
    })
    //console.log('Estoy en el modal', data);
    //this.formGroup.untouched
    this.id = data.id;
  }

  ngOnInit(): void {
    if (this.id !== undefined) {
      this.getDiente(this.id);
    }
    else {
      //mensaje de error al no existir el id
      this.errorMessage = 'ID is missing. Unable to fetch persona details.';
      //opcional
      //this.router.navigate(['/error']);

    }
  }

  getDiente(id: number) {
    //console.log(id);
    this.DientesService.getDiente(id).subscribe(result => {
      console.log(result);
      console.log({ result });

      this.formGroup.setValue({
        descripcion: result.data.descripcion,
        estado: result.data.estado
      })
    })
  }

  cancelar() {
    this.dialogRef.close(false);
  }

  addEditTImagen() {

    if (this.formGroup.invalid) {
      return;
    }
    const diente: dienteInterface = {
      id: this.formGroup.value.id,
      codigo: this.formGroup.value.codigo,
      descripcion: this.formGroup.value.descripcion,
      estado: this.formGroup.value.estado,
      odontograma_id: this.formGroup.value.odontograma_id
    }
    console.log(diente);

    if (this.id !== undefined) {
      //editar diente
      this.DientesService.updateDiente(this.id, diente).subscribe(data => {
        this.mensajeExito(diente.codigo, 'actualizado');
        this.dialogRef.close(true);
      })
    }
    else {
      console.error('Error al editar info del diente');
    }
    //Es editar
    this.dialogRef.close(true);
  }

  mensajeExito(id: number, operacion: string) {
    this._snackBar.open(`El dienten ${id} fue ${operacion} con exito`, '', {
      duration: 2000
    });
  }

  mensajeError() {
    this._snackBar.open(`Error al editar la imagen`, '', {
      duration: 2000
    });
  }


}
