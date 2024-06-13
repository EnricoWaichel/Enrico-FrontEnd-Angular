import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PartidaRoutingModule } from './partida-routing.module';
import { NovaPartidaComponent } from './nova-partida/nova-partida.component';

@NgModule({
  declarations: [
    NovaPartidaComponent
  ],
  imports: [
    CommonModule,
    PartidaRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PartidaModule { }
