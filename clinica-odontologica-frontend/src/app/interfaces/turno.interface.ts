import { PacienteInterface } from './paciente.interface';

export interface turnoInterface {
  id: number | null,
  fecha: Date,
  hora: string,
  descripcion: string,
  precio: number,
  entrega: string,
  paciente: PacienteInterface | null,
  diente: string | null,
  imagenes: string,
  profecional: string
}