import { CartaDetalheComponent } from './carta-detalhe/carta-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartasRoutingModule } from './cartas-routing.module';
import { CartaListagemComponent } from './carta-listagem/carta-listagem.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartaListagemComponent,
    CartaDetalheComponent,
  ],
  imports: [
    CommonModule,
    CartasRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class CartasModule { }
