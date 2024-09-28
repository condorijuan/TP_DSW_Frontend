import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TiposImagenInterface } from '../../interfaces/tipos-imagen.interface.js';
import { TiposImagenService } from '../../services/tipos-imagen.service.js';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-agregareditartipoimagen',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './agregareditartipoimagen.component.html',
  styleUrl: './agregareditartipoimagen.component.css'
})
export class AgregareditartipoimagenComponent {
/*   formGroup = new FormGroup({
   name: new FormControl('', { validators: Validators.required}) 
  }); */

  formGroup: FormGroup;
  operacion: string = 'Agregar ';
  id: number | undefined;
  n: string = '';

  constructor(public dialogRef: MatDialogRef<AgregareditartipoimagenComponent>,
    private fb: FormBuilder, private _tipoImagenService: TiposImagenService, private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.formGroup = this.fb.group({
        name: ['', Validators.required],
      })
      //console.log('Estoy en el modal', data);
      //this.formGroup.untouched
      this.id = data.id;
    }

  ngOnInit(): void {
    this.esEditar(this.id);
  }

  esEditar(id: number | undefined) {
    if (id !== undefined) {
      this.operacion = 'Editar ';
      this.getPersona(id);
    }
  }

  getPersona(id: number) {
    //console.log(id);
    this._tipoImagenService.getTipoImagen(id).subscribe(data => {
      console.log(data);
      console.log({data});
/*       this.formGroup.setValue({
        name: data.name data.nombre
      })   */ 
      this.formGroup.setValue({
        //name: JSON.stringify({data})
        //name: JSON.stringify(data)
        //name: JSON.parse(data)
        //name: data.name
        name: data.nombre
      })  
    }) 
  }

/*   clickAgregar(): void {
    //console.log(this.formGroup.get('name')?.value)
    //const name = this.formGroup.get('name')?.value;
    //console.log(name);
  } */

  cancelar() {
    this.dialogRef.close(false);
  }

  addEditTImagen() {

    if (this.formGroup.invalid) {
      return;
    }

    //const nombre = this.formGroup.value.name;
/*     const nombre = this.formGroup.get('name')?.value;
    console.log(nombre) */
    //console.log(this.formGroup);
    const tipoImagen: TiposImagenInterface = {
      nombre: this.formGroup.value.name
    }
    console.log(tipoImagen);

    if (this.id == undefined) {
      // Es agregar
      this._tipoImagenService.addTipoImagen(tipoImagen).subscribe(() => {
        this.mensajeExito(tipoImagen.nombre, 'agregada');
        this.dialogRef.close(true);
        console.log('tipoImagen agregado con exito!');
      })
    } else {
      //Es editar
      this._tipoImagenService.updateTipoImagen(this.id, tipoImagen).subscribe(data => {
        this.mensajeExito(tipoImagen.nombre, 'actualizada');
        this.dialogRef.close(true);
      })
    }
    this.dialogRef.close(true);
    //console.log('soy return invalid')
  }

  mensajeExito(nombre: string, operacion: string) {
    this._snackBar.open(`El tipo de imagen ${nombre} fue ${operacion} con exito`, '', {
      duration: 2000
    });
  }



}
