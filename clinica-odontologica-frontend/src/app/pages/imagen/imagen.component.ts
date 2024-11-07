import { Component } from '@angular/core';
import { ImagenInterface } from '../../interfaces/imagen.interface.js';
import { ImagenesService } from '../../services/imagen.service.js';

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [],
  templateUrl: './imagen.component.html',
  styleUrl: './imagen.component.css'
})
export class ImagenComponent {

    imagenesList: ImagenInterface[]=[];
    constructor(private imagenesService: ImagenesService) {}

    ngOnInit(): void {
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
