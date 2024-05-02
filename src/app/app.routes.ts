import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: 'cartas',
    loadChildren: () =>
    import('./cartas/cartas.module').then((m) => m.CartasModule),
  },
];
