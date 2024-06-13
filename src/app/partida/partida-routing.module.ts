import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaPartidaComponent } from './nova-partida/nova-partida.component';

const routes: Routes = [
  { path: 'nova-partida', component: NovaPartidaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidaRoutingModule { }
