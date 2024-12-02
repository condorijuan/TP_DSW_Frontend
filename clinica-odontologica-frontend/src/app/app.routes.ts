import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component.js';
import { TiposImagenComponent } from './pages/tipos-imagen/tipos-imagen.component.js';
import { ImagenComponent } from './pages/imagen/imagen.component.js';
import { TipoAntecedenteComponent } from './pages/tipo-antecedente/tipo-antecedente.component.js';
import { AntecedenteComponent } from './pages/antecedente/antecedente.component.js';
import { AgregareditartipoimagenComponent } from './pages/agregareditartipoimagen/agregareditartipoimagen.component.js';
import { DientesComponent } from './pages/dientes/dientes.component.js';
import { PacienteComponent } from './pages/paciente/paciente.component.js';
import { OdontogramaComponent } from './pages/odontograma/odontograma.component.js';
import { CarasComponent } from './pages/caras/caras.component.js';
import { AgregareditarimagenComponent } from './pages/agregareditarimagen/agregareditarimagen.component.js';
import { AgregareditartipoantecedenteComponent } from './pages/agregareditartipoantecedente/agregareditartipoantecedente.component.js';
import { AgregareditarantecedenteComponent } from './pages/agregareditarantecedente/agregareditarantecedente.component.js';
import { TurnoComponent } from './pages/turno/turno.component.js';
import { TurnoPacieteComponent } from './pages/turno-paciete/turno-paciete.component.js';
import { EditarTurnoComponent } from './pages/editar-turno/editar-turno.component.js';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'tipos-imagen',
        component: TiposImagenComponent
    },
    {
        path: 'imagen',
        component: ImagenComponent
    },
    {
        path: 'tipo-antecedente',
        component: TipoAntecedenteComponent
    },
    {
        path: 'antecedente',
        component: AntecedenteComponent
    },
    {
        path: 'agregareditartipoimagen',
        component: AgregareditartipoimagenComponent
    },
    {
        path: 'dientes/:id_odontograma',
        component: DientesComponent
    },
    {
        path: 'paciente',
        component: PacienteComponent
    },
    {
        path: 'odontograma',
        component: OdontogramaComponent
    },
    {
        path: 'caras/:id_diente',
        component: CarasComponent
    },

    /*     {
            path: '**',
            redirectTo: '/home', pathMatch: 'full'
        } */
    {
        path: 'agregareditartipoantecedente',
        component: AgregareditartipoantecedenteComponent
    },
    {
        path: 'agregareditarimagen',
        component: AgregareditarimagenComponent
    },
    {
        path: 'agregareditarantecedente',
        component: AgregareditarantecedenteComponent
    },
    {
        path: 'turno',
        component: TurnoComponent
    },
    {
        path: 'turno-paciete/:id',
        component: EditarTurnoComponent
    },
    {
        path: 'turno-paciete',
        component: TurnoPacieteComponent
    }
    /*     {
            path: '**',
            redirectTo: '/home', pathMatch: 'full'
        } */
];
