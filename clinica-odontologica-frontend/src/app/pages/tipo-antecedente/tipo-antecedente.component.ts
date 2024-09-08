import { Component } from '@angular/core';
import { TipoAntecedenteInterface } from '../../interfaces/tipo-antecedente.interface.js';
import { TipoAntecedenteService } from '../../services/tipo-antecedente.service.js';

@Component({
  selector: 'app-tipo-antecedente',
  standalone: true,
  imports: [],
  templateUrl: './tipo-antecedente.component.html',
  styleUrl: './tipo-antecedente.component.css'
})
export class TipoAntecedenteComponent {

    tipoAntecedenteList: TipoAntecedenteInterface[]=[];
    constructor(private tipoAntecedenteService: TipoAntecedenteService) {}

    ngOnInit(): void {
      this.getTipoAntecedente();
    }

    getTipoAntecedente(){
      this.tipoAntecedenteService.getTipoAntecedente().subscribe({
        next: (result) => {
          this.tipoAntecedenteList = result.data;
        },
        error: (err)=>{
          console.log(err);
        }
      })
    }

}
