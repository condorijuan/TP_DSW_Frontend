import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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

  constructor(public dialogRef: MatDialogRef<AgregareditartipoimagenComponent>,
    private fb: FormBuilder, private _tipoImagenService: TiposImagenService, private _snackBar: MatSnackBar) {
      this.formGroup = this.fb.group({
        name: ['', Validators.required],
      })

      //this.formGroup.untouched
    }

  ngOnInit(): void {
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
    console.log(this.formGroup);
    const tipoImagen: TiposImagenInterface = {
      nombre: this.formGroup.value.name
    }
    console.log(tipoImagen);

    this._tipoImagenService.addTipoImagen(tipoImagen).subscribe(() => {
      this.mensajeExito(tipoImagen.nombre);
      this.dialogRef.close(true);
      console.log('tipoImagen agregado con exito!');
    })
    console.log('soy return invalid')
  }

  mensajeExito(nombre: string) {
    this._snackBar.open(`El tipo de imagen ${nombre} fue agregado con exito`, '', {
      duration: 2000
    });
  }

  

}
