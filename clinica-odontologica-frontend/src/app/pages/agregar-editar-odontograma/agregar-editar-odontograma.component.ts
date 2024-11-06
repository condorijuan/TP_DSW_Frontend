import { Component, Inject, inject } from '@angular/core';
import { MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OdontogramaService } from '../../services/odontograma.service.js';
import { DientesService } from '../../services/dientes.service.js';
import { CarasService } from '../../services/caras.service.js';
import { concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-agregar-editar-odontograma',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
  ],
  templateUrl: './agregar-editar-odontograma.component.html',
  styleUrl: './agregar-editar-odontograma.component.css'
})
export class AgregarEditarOdontogramaComponent {
  rellenado: string = 'Agregar ';
  id: number | undefined;
  form: FormGroup;
  numeros: number[] = [];
  constructor(private fb: FormBuilder, private OdontogramaService: OdontogramaService, @Inject(MAT_DIALOG_DATA) public data: any,
    private DientesService: DientesService, private CarasService: CarasService) {
    this.form = this.fb.group({
      descripcion: ['', Validators.required],
      link: ['', Validators.required],
      id_paciente: ['', Validators.required]
    });
    this.id = data.id;
  }

  readonly dialogRef = inject(MatDialogRef<AgregarEditarOdontogramaComponent>);

  ngOnInit(): void {
    if (this.id !== undefined) {
      this.rellenado = 'Editar';
      this.OdontogramaService.getOdontograma(this.id).subscribe({
        next: (result) => {
          console.log(result);
          console.log(result.data.descripcion);
          this.form.setValue(
            {
              descripcion: result.data.descripcion,
              link: result.data.link,
            }
          );
        },
        error: (err) => {
          console.error('Error fetching paciente:', err);
        }
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  agregarEditarPaciente() {
    if (this.form.invalid) {
      return;
    }
    //creacion del objeto paciente
    const odontograma = {
      descripcion: this.form.value.descripcion,
      link: this.form.value.link,
      fecha: new Date(),
      paciente: this.form.value.id_paciente
    }
    console.log(this.form);

    if (this.id !== undefined) {
      this.OdontogramaService.updateOdontograma(this.id, odontograma).subscribe({
        next: (result) => {
          console.log(result);
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error updating paciente:', err);
        }
      })
      return;
    } else {

      /* this.OdontogramaService.addOdontograma(odontograma).subscribe({
        next: (result) => {
          console.log(result);
          const newId = result.data.id;
          this.numeros = this.generarNumeros();
          for (let i = 0; i < 32; i++) {
            const diente = {
              codigo: this.numeros[i],
              descripcion: '',
              estado: '',
              odontograma_id: newId
            }
            this.DientesService.addDiente(diente).subscribe(
              {
                next: (result) => {
                  const id_diente = result.data.id;
                  for (let j = 0; j < 5; j++) {
                    const cara = {
                      nombre: '',
                      descripcion: '',
                      estado: '',
                      diente: id_diente
                    }
                    this.CarasService.addCara(cara).subscribe({
                      next: (result) => {
                        console.log(result);
                      },
                      error: (err) => {
                        console.error('Error adding cara:', err);
                      }
                    });

                  }
                }
              }
            );
          }

          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error adding odontograma:', err);
        }
      }) */

      this.OdontogramaService.addOdontograma(odontograma).subscribe({
        next: (result) => {
          console.log(result);
          const newId = result.data.id;
          this.numeros = this.generarNumeros();

          // Bucle para agregar cada diente secuencialmente
          this.numeros.forEach((codigo, index) => {
            const diente = {
              codigo: codigo,
              descripcion: '',
              estado: '',
              odontograma: result.data.id
            };

            // Agregar diente y luego sus caras de forma secuencial
            this.DientesService.addDiente(diente).pipe(
              concatMap(resultDiente => {
                const id_diente = resultDiente.data.id;

                // Crear 5 caras para el diente de forma secuencial
                return of(...Array(5).fill(null)).pipe(
                  concatMap(() => {
                    const cara = {
                      nombre: '',
                      descripcion: '',
                      estado: '',
                      diente: id_diente
                    };
                    return this.CarasService.addCara(cara);
                  })
                );
              })
            ).subscribe({
              next: (resultCara) => {
                console.log(resultCara);
              },
              error: (err) => {
                console.error('Error adding diente o cara:' + { diente }, err);
              }
            });
          });
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error adding odontograma:', err);
        }
      });
    }
  }

  generarNumeros() {
    const numeros: number[] = [];

    for (let i = 1; i <= 4; i++) {
      const inicio = i * 10 + 1;
      const fin = i * 10 + 8;

      for (let j = inicio; j <= fin; j++) {
        numeros.push(j);
      }
    }
    return numeros;
  }
}
