import { Component } from '@angular/core';
import { ImagenesInterface } from '../../interfaces/imagenes.interface.js';
import { ImagenesService } from '../../services/imagenes.service.js';

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [],
  templateUrl: './imagen.component.html',
  styleUrl: './imagen.component.css'
})
export class ImagenComponent {

    imagenesList: ImagenesInterface[]=[];
    constructor(private imagenesService: ImagenesService) {}

    ngOninit(): void {
      console.log("Hola");
      this.getImagenes();
    }

    getImagenes(){
      this.imagenesService.getImagenes().subscribe({
        next: (result) => {
          this.imagenesList = result.data;
          console.log(result);
          console.log(result.imagen);
          console.log(result.data);
          console.log(this.imagenesList);
          console.log("Hola Mundo");
        },
        error: (err)=>{
          console.log(err);
        }
      })
    }
}
