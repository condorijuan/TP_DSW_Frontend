import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DientesService } from '../../services/dientes.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarDientesComponent } from '../editar-dientes/editar-dientes.component.js';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { dienteInterface } from '../../interfaces/diente.interface.js';

@Component({
  selector: 'app-dientes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dientes.component.html',
  styleUrl: './dientes.component.css'
})
export class DientesComponent implements OnInit {
  private activeRoute = inject(ActivatedRoute);
  private dialog = inject(MatDialog);
  DientesList: any[] = [];
  public id: number | undefined;
  constructor(private route: ActivatedRoute, private DientesService: DientesService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params['id_odontograma']) {
        this.id = params['id_odontograma'];
        this.getDientes(params['id_odontograma']);
      }
    });
  }

  getDientes(id_paciente: number) {
    console.log("Hola Mundo");
    console.log(id_paciente);
    this.DientesService.getDienteById_Odontograma(id_paciente).subscribe({
      next: (result) => {
        this.DientesList = result.data;
        console.log(result);
        console.log(result.dientes);
        console.log(result.data);
        console.log(this.DientesList);
        console.log("Hola Mundo");
      },
      error: (err) => {
        console.error('Error fetching dientes:', err);
      }
    })

  }

  agregarEditar(id: number) {
    console.log('abriendo formulario');
    const dialogRef = this.dialog.open(EditarDientesComponent, {
      width: '550px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('formulario cerrado');
      if (result) {
        this.getDientes(id);
      }
    });
  }

  deleteDiente(item: dienteInterface) {
    console.log(item.id);
    /* this.DientesService.deleteDiente(id).subscribe({
      next: (result) => {
        console.log(result);
        this.getDientes(id);
      },
      error: (err) => {
        console.error('Error deleting diente:', err);
      }
    }) */

    //alternatica donde solo ponen los estados vacios

    const diente = {
      codigo: item.codigo,
      descripcion: '',
      estado: '',
      odontograma_id: item.odontograma_id
    }
    this.DientesService.updateDiente(item.id, diente).subscribe()

  }

  VerCaras(id: number) {
    console.log(id);
  }
}
