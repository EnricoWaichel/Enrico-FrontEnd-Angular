
import { Component, OnInit } from '@angular/core';
import { Carta } from '../../shared/model/carta';
import { CartasService } from '../../shared/service/cartas.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carta-detalhe',
  templateUrl: './carta-detalhe.component.html',
  styleUrl: './carta-detalhe.component.scss'
})
export class CartaDetalheComponent implements OnInit{

  public carta: Carta = new Carta();

  constructor(private cartaService:CartasService,
    private router: Router
  ) { }

ngOnInit(): void {
}
salvar(): void {
  this.cartaService.salvar(this.carta).subscribe(
    (resposta) => {
      Swal.fire('Carta salva com sucesso!','','success');
      this.voltar();
    },
    (erro) => {
      Swal.fire('Erro ao salvar a carta!',erro,'error');
    }
  );
}
voltar(): void {
  this.router.navigate(['/voltar']);
}
}
