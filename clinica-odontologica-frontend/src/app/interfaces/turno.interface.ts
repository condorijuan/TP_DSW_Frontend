import { PacienteInterface } from './paciente.interface';

export interface turnoInterface {
  fecyhora: Date,
  descripcion: string,
  precio: number,
  entrega: string,
  paciente: PacienteInterface | null,
  diente: string | null,
  imagenes: string,
  profecional: string
}