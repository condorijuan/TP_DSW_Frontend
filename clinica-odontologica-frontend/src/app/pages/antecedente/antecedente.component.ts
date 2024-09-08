import { Component } from '@angular/core';
import { AntecedenteInterface } from '../../interfaces/antecedente.interface.js';
import { AntecedenteService } from '../../services/antecedente.service.js';

@Component({
  selector: 'app-antecedente',
  standalone: true,
  imports: [],
  templateUrl: './antecedente.component.html',
  styleUrl: './antecedente.component.css'
})
export class AntecedenteComponent {

  antecedentesList: AntecedenteInterface[]=[];
  constructor(private antecedenteService: AntecedenteService) {}

  ngOnInit(): void {
    this.getAntecedentes();
    /* console.log(this.antecedentesList); */
  }

  getAntecedentes(){
    this.antecedenteService.getAntecedentes().subscribe({
      next: (result) => {
        this.antecedentesList = result.data;
        /* console.log("hola"); */
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

}
