import { JogadorListagemComponent } from './jogador-listagem/jogador-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogadorDetalheComponent } from './jogador-detalhe/jogador-detalhe.component';

const routes: Routes = [
  { path: '', component: JogadorListagemComponent },
  { path: 'detalhe', component: JogadorDetalheComponent },
  { path: 'detalhe/:id', component: JogadorDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogadorRoutingModule {}
