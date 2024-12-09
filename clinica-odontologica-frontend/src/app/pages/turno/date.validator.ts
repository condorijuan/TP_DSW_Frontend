import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { turnoInterface } from "../../interfaces/turno.interface.js";

export function dateValidator(turnos: turnoInterface[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const browserDate = new Date(control.value);
    const selectedDate = new Date(
      browserDate.getUTCFullYear(), 
      browserDate.getUTCMonth(), 
      browserDate.getUTCDate()
    );

    //console.log(`Fecha seleccionada: ${selectedDate.toISOString().split('T')[0]} - ${selectedDate.getTime()}`)
    let turnosLibres = 4;
    turnos.forEach(turno => {
      let fecha = new Date(turno.fecha);
      //console.log(`Fecha turno: ${fecha.toISOString().split('T')[0]} - ${fecha.getTime()}`)
      if(fecha.getTime() === selectedDate.getTime()){
        turnosLibres -= 1;
      }
    })
    //console.log(turnosLibres);
    return turnosLibres <= 0 ? { busyDate: true } : null; 
  }
}