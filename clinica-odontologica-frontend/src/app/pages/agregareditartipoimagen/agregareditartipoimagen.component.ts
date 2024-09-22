import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TiposImagenInterface } from '../../interfaces/tipos-imagen.interface.js';
import { TiposImagenService } from '../../services/tipos-imagen.service.js';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-agregareditartipoimagen',
  standalone: true,
  imports: [ReactiveFormsModule],
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
        name: ['', Validators.required]
      })
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
    //const nombre = this.formGroup.value.name;
/*     const nombre = this.formGroup.get('name')?.value;
    console.log(nombre) */
    const tipoImagen: TiposImagenInterface = {
      nombre: this.formGroup.value.name
    }
    console.log(tipoImagen);

    this._tipoImagenService.addTipoImagen(tipoImagen).subscribe(() => {
      this.mensajeExito(tipoImagen.nombre);
      this.dialogRef.close(true);
      console.log('tipoImagen agregado con exito!');
    })

  }

  mensajeExito(nombre: string) {
    this._snackBar.open(`El tipo de imagen ${nombre} fue agregado con exito`, '', {
      duration: 2000
    });
  }

}
