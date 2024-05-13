import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosRoutingModule } from './carros-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { MontadorasComponent } from './montadoras/montadoras.component';


@NgModule({
  declarations: [
    ListaComponent,
    MontadorasComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class CarrosModule { }
