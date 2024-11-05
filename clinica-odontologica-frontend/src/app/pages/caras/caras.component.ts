import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { caraInterface } from '../../interfaces/cara.inteface.js';
import { CarasService } from '../../services/caras.service.js';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-caras',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatTableModule, MatInputModule, FormsModule],
  templateUrl: './caras.component.html',
  styleUrl: './caras.component.css'
})
export class CarasComponent {

  /*  formGroup: FormGroup; */
  operacion: string = 'Agregar ';
  id_diente: number | undefined;
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'estado', 'diente', 'acciones'];
  dataSource: Array<caraInterface>[] = [];
  errorMessage: string | undefined;
  EstadoEditable: boolean = false;
  constructor(public dialogRef: MatDialogRef<CarasComponent>,
    private fb: FormBuilder, private CarasService: CarasService, private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) {
    /* this.formGroup = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
    }) */
    //console.log('Estoy en el modal', data);
    //this.formGroup.untouched
    this.id_diente = data.id;
  }

  ngOnInit(): void {
    if (this.id_diente !== undefined) {
      this.getCara(this.id_diente);
    }
    else {
      //mensaje de error al no existir el id
      this.errorMessage = 'ID is missing. Unable to fetch persona details.';
      //opcional
      //this.router.navigate(['/error']);

    };
    console.log(this.EstadoEditable);
  }

  toggleEdit(element: any): void {
    this.EstadoEditable = !this.EstadoEditable;
    console.log(this.EstadoEditable);
  }

  save(element: any): void {
    this.EstadoEditable = false;
    // Aquí puedes agregar la lógica para guardar los cambios
  }

  cancel(element: any): void {
    this.EstadoEditable = false;
    // Aquí puedes agregar la lógica para revertir los cambios si es necesario
  }

  getCara(id: number) {
    this.CarasService.getCaraById_Diente(id).subscribe(result => {
      this.dataSource = result.data;
      console.log(result);
      console.log({ result });

      /* this.formGroup.setValue({
        id: result.data.id,
        nombre: result.data.nombre,
        descripcion: result.data.descripcion,
        estado: result.data.estado
      }) */

    })
  }


  cancelar() {
    this.dialogRef.close(false);
  }

  /* addEditCara() {

    if (this.formGroup.invalid) {
      return;
    }
    const cara: caraInterface = {
      id: this.formGroup.value.id,
      nombre: this.formGroup.value.nombre,
      descripcion: this.formGroup.value.descripcion,
      estado: this.formGroup.value.estado,
      diente_id: this.formGroup.value.diente_id
    }
    console.log(cara);

    if (this.id !== undefined) {
      //editar diente
      this.DientesService.updateDiente(this.id, diente).subscribe(data => {
        this.mensajeExito('actualizado', this.id);
        this.dialogRef.close(true);
      })
    }
    else {
      console.error('Error al editar info del diente');
    }
    //Es editar
    this.dialogRef.close(true);
  } */

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
