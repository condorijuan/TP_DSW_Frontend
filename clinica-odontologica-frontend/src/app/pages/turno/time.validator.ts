import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { turnoInterface } from "../../interfaces/turno.interface.js";

export function hourValidator(turnos: turnoInterface[]): ValidatorFn {
  return (control: AbstractControl,): ValidationErrors | null => {
    const fecha = control.get('fecha')?.value;
    const hora = control.get('hora')?.value;

    const browserDate = new Date(fecha?.value);
    const selectedDate = new Date(
      browserDate.getUTCFullYear(), 
      browserDate.getUTCMonth(), 
      browserDate.getUTCDate()
    );

    const turnoOcupado = turnos.some(turno => {
      let fecha = new Date(turno.fecha);
      let sameDate = (fecha.getTime() === selectedDate.getTime());
      let sameHour = (turno.hora === hora);
      console.log(`Hora elegida: ${hora}  Otra hora: ${turno.hora}`)
      return (sameDate && sameHour);
    })

    return turnoOcupado ? { busyHour: true } : null; 
  }
}