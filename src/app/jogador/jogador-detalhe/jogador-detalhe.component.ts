import { Jogador } from './../../shared/model/jogador';
import { Component, OnInit } from '@angular/core';
import { JogadorService } from '../../shared/service/jogador.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jogador-detalhe',
  templateUrl: './jogador-detalhe.component.html',
  styleUrl: './jogador-detalhe.component.scss'
})
export class JogadorDetalheComponent implements OnInit{

  public jogador: Jogador = new Jogador();
public idJogador: number;

  constructor(private jogadorService:JogadorService,
          private router: Router,
          private route: ActivatedRoute
  ) { }

ngOnInit(): void {
  this.route.params.subscribe((params) => {
    this.idJogador = params['id'];
    if(this.idJogador) {
      this.buscarCarta();
    }
  })
}
buscarCarta(): void {
  this.jogadorService.consultar(this.idJogador).subscribe(
    (jogador) => {
      this.jogador= jogador;
    },
    (erro) => {
      Swal.fire('Erro ao buscar a carta!',erro,'error');
    }
  );
}
salvar(): void {
  if(this.idJogador){
    this.atualizar();
  }else {
    this.inserir();
  }
}
inserir(): void {
  this.jogadorService.salvar(this.jogador).subscribe(
    (resposta) => {
      Swal.fire('Carta salva com sucesso!','','success');
      this.voltar();
    },
      (erro) => {
      Swal.fire('Erro ao salvar a carta: '+ erro.error.mensagem,'error')
      }
  );
}
atualizar(): void {
  this.jogadorService.atualizar(this.jogador).subscribe(
    (resposta) => {
      Swal.fire('Carta atualizada com sucesso!','','success');
      this.voltar();
    },
    (erro) => {
      Swal.fire('Erro ao atualizar a carta!', erro.error.mensagem ,'error');
    }
  );
}
voltar(): void {
  this.router.navigate(['/jogador']);
}
}
