import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Carta } from '../../shared/model/carta';
import { CartasService } from '../../shared/service/cartas.service';
import { CartaSeletor } from './../../shared/model/seletor/carta.seletor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carta-listagem',
  templateUrl: './carta-listagem.component.html',
  styleUrl: './carta-listagem.component.scss'
})
export class CartaListagemComponent implements OnInit{

  public cartas: Carta[] = [];
  public seletor: CartaSeletor = new CartaSeletor();

  constructor(private CartaService: CartasService,
    private router: Router) {  }

  ngOnInit(): void {
    this.consultarTodasCartas();
  }

  public pesquisar() {
    this.CartaService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.cartas = resultado;
      }
    )
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
public limpar() {
  this.seletor = new CartaSeletor();
}
excluir(cartaSelecionada: Carta) {
  Swal.fire({
    title: 'Deseja realmente exluir a carta?',
    text: 'Essa ação não poderá ser desfeita!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim, exluir!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      this.CartaService.excluir(cartaSelecionada.id).subscribe(
        resultado => {
          this.pesquisar();
        },
        erro => {
          Swal.fire('Erro!','Erro ao exluir a carta: '+erro.error.mensagem,'error');
        }
      );
    }
  });
}
editar(idCartaSelecionada: number) {
  this.router.navigate(['/cartas/detalhe/',idCartaSelecionada])
}
}
