import { Jogador } from '../shared/model/vemProX1/jogador';
import { JogadorDetalheComponent } from './jogador-detalhe/jogador-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogadorRoutingModule } from './jogador-routing.module';
import { JogadorListagemComponent } from './jogador-listagem/jogador-listagem.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JogadorListagemComponent,
     JogadorDetalheComponent,
  ],
  imports: [
    CommonModule,
    JogadorRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class JogadorModule { }
