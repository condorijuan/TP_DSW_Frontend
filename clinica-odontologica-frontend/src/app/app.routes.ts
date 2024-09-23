import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component.js';
import { TiposImagenComponent } from './pages/tipos-imagen/tipos-imagen.component.js';
import { ImagenComponent } from './pages/imagen/imagen.component.js';
import { TipoAntecedenteComponent } from './pages/tipo-antecedente/tipo-antecedente.component.js';
import { AntecedenteComponent } from './pages/antecedente/antecedente.component.js';
import { PacienteComponent } from './pages/paciente/paciente.component.js';
import { OdontogramaComponent } from './pages/odontograma/odontograma.component.js';

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
        path: 'paciente',
        component: PacienteComponent
    },
    {
        path: 'odontograma',
        component: OdontogramaComponent
    }
    /*     {
            path: '**',
            redirectTo: '/home', pathMatch: 'full'
        } */
];
