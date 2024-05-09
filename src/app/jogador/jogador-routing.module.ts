import { JogadorListagemComponent } from './jogador-listagem/jogador-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogadorDetalheComponent } from './carta-detalhe/carta-detalhe.component';

const routes: Routes = [
  { path: '', component: CartaListagemComponent },
  { path: 'detalhe', component: CartaDetalheComponent },
  { path: 'detalhe/:id', component: CartaDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartasRoutingModule { }
