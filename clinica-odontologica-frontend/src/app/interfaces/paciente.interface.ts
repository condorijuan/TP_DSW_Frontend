export interface PacienteInterface {
  id: number;
  nombre: string;
  apellido: string;
  genero: string;
  direccion: string;
  telefono: string;
  email: string;
  /*imagenes: {
      id: number;
      createdAt: Date;
      tipoImagen: {
          id: number;
          nombre: string;
      }
      descripcion: string;
  }[]*/
}