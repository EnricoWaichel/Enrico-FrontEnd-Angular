import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Jogador } from '../../shared/model/vemProX1/jogador';
import { JogadorService } from '../../shared/service/vemProX1/jogador.service';
import { PartidaService } from '../../shared/service/vemProX1/partida.service';
import { Partida } from '../../shared/model/vemProX1/partida';
import { Carta } from '../../shared/model/vemProX1/carta';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nova-partida',
  templateUrl: './nova-partida.component.html',
  styleUrls: ['./nova-partida.component.scss']
})
export class NovaPartidaComponent implements OnInit {
  novaPartidaForm: FormGroup;
  jogadores: Jogador[] = [];
  jogadorSelecionado: Jogador | null = null;
  partida: Partida | undefined;
  cartas: Carta[] = [];

  constructor(
    private fb: FormBuilder,
    private jogadorService: JogadorService,
    private partidaService: PartidaService
  ) {
    this.novaPartidaForm = this.fb.group({
      jogador1: [null]
    });
  }

  ngOnInit(): void {
    this.jogadorService.listarTodos().subscribe(data => {
      this.jogadores = data;
      console.log('Jogadores carregados:', this.jogadores);
    }, error => {
      console.error('Erro ao carregar jogadores:', error);
    });
  }

  iniciarPartida() {
    const jogadorSelecionadoId = this.jogadorSelecionado?.id;
    if (!jogadorSelecionadoId) {
      Swal.fire('Erro', 'Selecione um jogador para iniciar a partida.', 'error');
      return;
    }

    this.partidaService.criarPartida(jogadorSelecionadoId).subscribe(
      (partida: Partida) => {
        this.partida = partida;
        console.log('Partida criada com ID:', this.partida.id);
        this.mostrarMensagemPartidaCriada();
        this.carregarCartas();
      },
      error => {
        console.error('Erro ao criar partida:', error);
        Swal.fire('Erro', 'Erro ao criar partida. Por favor, tente novamente.', 'error');
      }
    );
  }

  mostrarMensagemPartidaCriada() {
    if (this.partida && this.jogadorSelecionado) {
      Swal.fire('Sucesso', `Nova X1 #${this.partida.id} criada para o usuário ${this.jogadorSelecionado.nome}!`, 'success');
    }
  }

  carregarCartas() {
    if (this.partida) {
      console.log('Carregando cartas para a partida ID:', this.partida.id);
      this.partidaService.buscarCartas(this.partida.id).subscribe(
        (cartas: Carta[]) => {
          this.cartas = cartas;
          console.log('Cartas carregadas:', this.cartas);
        },
        error => {
          console.error('Erro ao carregar cartas:', error);
          Swal.fire('Erro', 'Não foi possível carregar as cartas. Tente novamente.', 'error');
        }
      );
    }
  }

  jogarCarta(carta: Carta, atributo: string) {
    if (!atributo) {
      Swal.fire('Erro', 'Selecione um atributo para jogar.', 'error');
      return;
    }

    if (carta.usada) {
      Swal.fire('Erro', 'Esta carta já foi usada.', 'error');
      return;
    }

    if (this.partida) {
      this.partidaService.realizarJogada(this.partida.id, carta.id, atributo).subscribe(
        (updatedPartida: Partida) => {
          carta.usada = true;
          this.partida = updatedPartida;
          Swal.fire('Sucesso', 'Jogada realizada com sucesso!', 'success');
        },
        error => {
          console.error('Erro ao realizar jogada:', error);
          Swal.fire('Erro', 'Erro ao realizar jogada. Por favor, tente novamente.', 'error');
        }
      );
    }
  }
}
