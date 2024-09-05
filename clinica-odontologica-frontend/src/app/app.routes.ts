import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component.js';
import { TiposImagenComponent } from './pages/tipos-imagen/tipos-imagen.component.js';
import { ImagenComponent } from './pages/imagen/imagen.component.js';

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
    }
/*     {
        path: '**',
        redirectTo: '/home', pathMatch: 'full'
    } */
];
