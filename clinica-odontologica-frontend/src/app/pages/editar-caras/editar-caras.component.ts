import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { CarasService } from '../../services/caras.service.js';
import { caraInterface } from '../../interfaces/cara.inteface.js';


@Component({
  selector: 'app-editar-caras',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './editar-caras.component.html',
  styleUrl: './editar-caras.component.css'
})
export class EditarCarasComponent {
  formGroup: FormGroup;
  operacion: string = 'Agregar ';
  id: number | undefined;

  errorMessage: string | undefined;

  constructor(public dialogRef: MatDialogRef<EditarCarasComponent>,
    private fb: FormBuilder, private CarasService: CarasService, private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formGroup = this.fb.group({
      nombre: ['', Validators.required],
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
    this.CarasService.getcarabyid(id).subscribe(result => {
      console.log(result);
      console.log({ result });
      this.formGroup.setValue({
        nombre: result.data.nombre,
        descripcion: result.data.descripcion,
        estado: result.data.estado
      })
    })
  }

  cancelar() {
    this.dialogRef.close(false);
  }

  addEditCara() {
    console.log('Eliminando cara');
    if (this.formGroup.invalid) {
      return;
    }
    const cara: caraInterface = {
      id: this.formGroup.value.id,
      nombre: this.formGroup.value.nombre,
      descripcion: this.formGroup.value.descripcion,
      estado: this.formGroup.value.estado,
      diente: this.formGroup.value.odontograma_id
    }

    if (this.id !== undefined) {
      //editar diente
      this.CarasService.updateCara(this.id, cara).subscribe(data => {
        this.mensajeExito('actualizado', this.id);
        this.dialogRef.close(true);
      })
    }
    else {
      console.error('Error al editar info del diente');
    }

    this.dialogRef.close(true);
  }

  mensajeExito(operacion: string, id?: number) {
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
