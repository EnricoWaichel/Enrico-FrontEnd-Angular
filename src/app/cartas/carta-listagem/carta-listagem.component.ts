import { Component, OnInit } from '@angular/core';
import { Carta } from '../../shared/model/carta';
import { CartasService } from '../../shared/service/cartas.service';


@Component({
  selector: 'app-carta-listagem',

  templateUrl: './carta-listagem.component.html',
  styleUrl: './carta-listagem.component.scss'
})
export class CartaListagemComponent implements OnInit{

  public cartas: Carta[] = [];

  constructor(private CartaService: CartasService) { }

  ngOnInit(): void {
    this.consultarTodasCartas();
  }

  private consultarTodasCartas() {
    this.CartaService.listarTodas().subscribe(
      resultado => {
        this.cartas =resultado;
      },
      erro => {
        console.error('erro ao consultar cartas',erro);
      }
    );
  }



}
