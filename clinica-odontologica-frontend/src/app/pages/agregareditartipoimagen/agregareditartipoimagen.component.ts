import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregareditartipoimagen',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregareditartipoimagen.component.html',
  styleUrl: './agregareditartipoimagen.component.css'
})
export class AgregareditartipoimagenComponent {
  formGroup = new FormGroup({
   name: new FormControl('', { validators: Validators.required}) 
  });
  clickAgregar(): void {
    //console.log(this.formGroup.get('name')?.value)
    const name = this.formGroup.get('name')?.value;
    console.log(name);
  }
}
