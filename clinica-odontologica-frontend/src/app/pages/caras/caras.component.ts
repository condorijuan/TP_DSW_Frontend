import { Component, inject } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';
import { EditarCarasComponent } from '../editar-caras/editar-caras.component.js';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-caras',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatTableModule, MatInputModule, FormsModule],
  templateUrl: './caras.component.html',
  styleUrl: './caras.component.css'
})
export class CarasComponent {

  /*  formGroup: FormGroup; */
  CarasList: any[] = [];
  EstadoEditable: boolean = false;
  private activeRoute = inject(ActivatedRoute);
  private dialog = inject(MatDialog);
  public id_diente: number | undefined;
  constructor(private route: ActivatedRoute, private CarasService: CarasService) {

  }

  ngOnInit(): void {
    console.log("caras");
    this.activeRoute.params.subscribe(params => {
      if (params['id_diente']) {
        this.id_diente = params['id_diente'];
        this.getCaras(params['id_diente']);
      }
    })
  }

  getCaras(id_diente: number) {
    console.log("Hola Mundo");
    console.log(id_diente);
    this.CarasService.getCaraById_Diente(id_diente).subscribe({
      next: (result) => {
        this.CarasList = result.data;
        console.log(result);
        console.log(result.caras);
        console.log(result.data);
        console.log(this.CarasList);
        console.log("Hola Mundo");
      },
      error: (err) => {
        console.error('Error fetching caras:', err);
      }
    })
  }


  deleteCara(item: any) {
    console.log('Eliminando cara');
    const cara = {
      id: item.id,
      nombre: '',
      descripcion: '',
      estado: '',
      diente: item.id_diente,
    }
    this.CarasService.updateCara(item.id, cara).subscribe()

    if (this.id_diente) {
      this.getCaras(this.id_diente);
    }
  }

  Editar(id: number) {
    console.log('abriendo formulario');
    const dialogRef = this.dialog.open(EditarCarasComponent, {
      width: '80%',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('formulario cerrado');
      if (result && this.id_diente) {
        this.getCaras(this.id_diente);
      }
    });
  }
}
