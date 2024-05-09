import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogadorRoutingModule } from './jogador-routing.module';
import { JogadorListagemComponent } from './jogador-listagem/jogador-listagem.component';


@NgModule({
  declarations: [
    JogadorListagemComponent
  ],
  imports: [
    CommonModule,
    JogadorRoutingModule
  ]
})
export class JogadorModule { }
