import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Carro } from '../../shared/model/provaFrontEnd/carro';
import { CarrosService } from '../../shared/service/provaFrontEnd/carros.service';
import { CarroSeletor } from '../../shared/model/seletor/carro.seletor';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit{

  public carros: Carro[] = [];
  public seletor: CarroSeletor = new CarroSeletor();

  constructor(private CarroService: CarrosService,
    private router: Router) {  }

  ngOnInit(): void {  }

  public pesquisar() {
    this.CarroService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.carros = resultado;
      }
    )
  }

public limpar() {
  this.seletor = new CarroSeletor();
}

}
