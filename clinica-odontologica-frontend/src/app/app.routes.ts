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
import { LoginComponent } from './pages/login/login.component.js';
import { authGuard } from './guards/auth.guard.js';
import { roleguardGuard } from './guards/roleguard.guard.js';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin', 'cliente'] }
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'tipos-imagen',
        component: TiposImagenComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin'] }
    },

    {
        path: 'imagen',
        component: ImagenComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin', 'cliente'] }
    },
    {
        path: 'tipo-antecedente',
        component: TipoAntecedenteComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin'] }
    },
    {
        path: 'antecedente',
        component: AntecedenteComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin', 'cliente'] }
    },
    {
        path: 'agregareditartipoimagen',
        component: AgregareditartipoimagenComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin'] }
    },
    {
        path: 'dientes/:id_odontograma',
        component: DientesComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin', 'cliente'] }
    },
    {
        path: 'paciente',
        component: PacienteComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin', 'cliente'] }
    },
    {
        path: 'odontograma',
        component: OdontogramaComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin', 'cliente'] }
    },
    {
        path: 'caras/:id_diente',
        component: CarasComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin', 'cliente'] }
    },
    {
        path: 'agregareditartipoantecedente',
        component: AgregareditartipoantecedenteComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin'] }
    },
    {
        path: 'agregareditarimagen',
        component: AgregareditarimagenComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin'] }
    },
    {
        path: 'agregareditarantecedente',
        component: AgregareditarantecedenteComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin'] }
    },
    {
        path: 'turno',
        component: TurnoComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin', 'cliente'] }
    },
    {
        path: 'turno-paciete/:id',
        component: EditarTurnoComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin', 'cliente'] }
    },
    {
        path: 'turno-paciete',
        component: TurnoPacieteComponent,
        canActivate: [authGuard, roleguardGuard],
        data: { role: ['admin', 'cliente'] }
    }
];
