export interface ImagenInterface{
    id: number;
    createdAt: Date;
    /* tipoImagen: number; */
    tipoImagen: {
        id: number;
        nombre: string;
    }
    descripcion: string;
    
}