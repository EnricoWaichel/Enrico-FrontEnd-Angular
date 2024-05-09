import { Jogador } from './../../shared/model/jogador';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { JogadorService } from '../../shared/service/jogador.service';
import { JogadorSeletor } from '../../shared/model/seletor/jogador.seletor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jogador-listagem',
  templateUrl: './jogador-listagem.component.html',
  styleUrl: './jogador-listagem.component.scss'
})
export class JogadorListagemComponent implements OnInit{

  public jogador: Jogador[] = [];
  public seletor: JogadorSeletor = new JogadorSeletor();

  constructor(private JogadorService: JogadorService,
    private router: Router) {  }

  ngOnInit(): void {
    this.consultarTodasJogadores();
  }

  public pesquisar() {
    this.JogadorService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.jogador = resultado;
      }
    )
  }

  private consultarTodasJogadores() {
    this.JogadorService.listarTodos().subscribe(
      resultado => {
        this.jogador =resultado;
      },
      erro => {
        console.error('erro ao consultar jogadores',erro);
      }
    );
  }
public limpar() {
  this.seletor = new JogadorSeletor();
}
excluir(jogadorSelecionado: Jogador) {
  Swal.fire({
    title: 'Deseja realmente exluir o jogador?',
    text: 'Essa ação não poderá ser desfeita!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim, exluir!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      this.JogadorService.excluir(jogadorSelecionado.id).subscribe(
        resultado => {
          this.pesquisar();
        },
        erro => {
          Swal.fire('Erro!','Erro ao exluir o jogador: '+erro.error.mensagem,'error');
        }
      );
    }
  });
}
editar(idJogadorSelecionado: number) {
  this.router.navigate(['/jogador/detalhe/',idJogadorSelecionado])
}
}
