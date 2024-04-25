import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartasRoutingModule } from './cartas-routing.module';
import { CartaListagemComponent } from './carta-listagem/carta-listagem.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CartaListagemComponent
  ],
  imports: [
    CommonModule,
    CartasRoutingModule,
    HttpClientModule
  ]
})
export class CartasModule { }
