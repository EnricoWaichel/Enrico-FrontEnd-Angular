import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogadorListagemComponent } from './jogador-listagem/jogador-listagem.component';

const routes: Routes = [
  {path: "", component: JogadorListagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogadorRoutingModule { }
