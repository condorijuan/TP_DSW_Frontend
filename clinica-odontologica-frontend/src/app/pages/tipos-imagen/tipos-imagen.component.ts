import { Component } from '@angular/core';
import { TiposImagenService } from '../../services/tipos-imagen.service.js';
import { TiposImagenInterface } from '../../interfaces/tipos-imagen.interface.js';
import { AgregareditartipoimagenComponent } from '../agregareditartipoimagen/agregareditartipoimagen.component.js';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-tipos-imagen',
  standalone: true,
  imports: [],
  templateUrl: './tipos-imagen.component.html',
  styleUrl: './tipos-imagen.component.css'
})
export class TiposImagenComponent {

    tiposImagenList: TiposImagenInterface[]=[];
    constructor(private tiposImagenService: TiposImagenService, public dialog: MatDialog) {}

    ngOnInit(): void {
      this.getTiposImagen();
    }
  
    getTiposImagen(){
      this.tiposImagenService.getTiposImagen().subscribe({
        next: (result) => {
          this.tiposImagenList = result.data;
          console.log(result);
          console.log(result.tipoImagen);
        },
        error: (err)=>{
          console.log(err);
        }
      })
    } 

    addEditTImagen(){
      const dialogRef = this.dialog.open(AgregareditartipoimagenComponent, {
        width: '550px',
        disableClose: true
        //data: { id: id }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed')
        if (result) {
          this.getTiposImagen();
        }
        
      })

    }

  }   
