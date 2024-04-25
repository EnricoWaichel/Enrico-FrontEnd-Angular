import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carta-listagem',

  templateUrl: './carta-listagem.component.html',
  styleUrl: './carta-listagem.component.scss'
})
export class CartaListagemComponent implements OnInit{

  public cartas: Carta[] = [
    {id:1, nome:'Pelé',forca:5,inteligencia:3,velocidade:5,dataCadastro: new Date()},
    {id:1, nome:'Jorge',forca:3,inteligencia:3,velocidade:2,dataCadastro: new Date()},
    {id:1, nome:'Nilson',forca:2,inteligencia:4,velocidade:1,dataCadastro: new Date()},
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
