import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'hola-mundo',
    loadComponent: () => import('./hola-mundo/hola-mundo.page').then( m => m.HolaMundoPage)
  },
];
