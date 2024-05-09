import { JogadorSeletor } from './../../shared/model/seletor/jogador.seletor';
import { Component, OnInit } from '@angular/core';
import { JogadorSeletor } from '../../shared/model/seletor/jogador.seletor';
import { Jogador } from '../../shared/model/jogador';

@Component({
  selector: 'app-jogador-listagem',
  templateUrl: './jogador-listagem.component.html',
  styleUrl: './jogador-listagem.component.scss'
})
export class JogadorListagemComponent implements OnInit {

  public Jogador: Jogador[] = [];
  public seletor:JogadorSeletor = new JogadorSeletor();

  constructor(private JogadorService: JogadorService) {  }

  ngOnInit(): void {
  }
}
