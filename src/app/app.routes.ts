import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cartas',
    loadChildren: () => import('./cartas/cartas.module').then(m => m.CartasModule)
  },
  {
    path: 'jogador',
    loadChildren: () => import('./jogador/jogador.module').then(m => m.JogadorModule)
  },
  {
    path: 'partida',
    loadChildren: () => import('./partida/partida.module').then(m => m.PartidaModule)
  },
];
