export interface AntecedenteInterface{
    id: number;
    descripcion: string;
    tipoantecedente: {
        id: number;
        nombre: string;
    }
}