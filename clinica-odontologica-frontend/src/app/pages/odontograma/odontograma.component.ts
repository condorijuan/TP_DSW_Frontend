import { Component, inject } from '@angular/core';
import { OdontogramaService } from '../../services/odontograma.service';
import { MatDialog } from '@angular/material/dialog';
import { AgregarEditarOdontogramaComponent } from '../agregar-editar-odontograma/agregar-editar-odontograma.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-odontograma',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './odontograma.component.html',
  styleUrl: './odontograma.component.css'
})
export class OdontogramaComponent {
  readonly dialog = inject(MatDialog);
  odontogramasList: any[] = [];
  constructor(private OdontogramaService: OdontogramaService) { }

  ngOnInit(): void {
    console.log("Hola");
    this.getOdontogramas();
  }

  getOdontogramas() {
    this.OdontogramaService.getOdontogramas().subscribe({
      next: (result) => {
        this.odontogramasList = result.data;
        console.log(result);
        console.log(result.odontograma);
        console.log(result.data);
        console.log(this.odontogramasList);
        console.log("Hola Mundo");
      },
      error: (err) => {
        console.error('Error fetching odontogramas:', err);
      }
    })
  }

  deleteOdontograma(id: number) {
    console.log(id);
    this.OdontogramaService.deleteOdontograma(id).subscribe({
      next: (result) => {
        console.log(result);
        this.getOdontogramas();
      },
      error: (err) => {
        console.error('Error deleting odontograma:', err);
      }
    })
  }

  AgregarEditar(id?: number) {
    console.log('abriendo formulario');
    const dialogRef = this.dialog.open(AgregarEditarOdontogramaComponent, {
      width: '550px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('formulario cerrado');
      if (result) {
        this.getOdontogramas();
      }
    });
  }
}
