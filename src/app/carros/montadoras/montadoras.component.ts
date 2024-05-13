import { Component, OnInit } from '@angular/core';
import { MontadoraService } from './../../shared/service/provaFrontEnd/montadoras.service';
import Swal from 'sweetalert2';
import { Montadora } from '../../shared/model/provaFrontEnd/montadora';

@Component({
  selector: 'app-montadoras',
  templateUrl: './montadoras.component.html',
  styleUrl: './montadoras.component.scss'
})
export class MontadorasComponent implements OnInit{

    public montadora: Montadora = new Montadora()
    public montadoras: Montadora[] = []

    constructor(private MontadoraService: MontadoraService) { }

    ngOnInit(): void {
      this.consultarTodasMontadoras()
    }

    public consultarEstoqueCarros(id: number){
      if(!id){
        Swal.fire('Selecione uma montadora', '', 'warning')
        return
      }

      this.MontadoraService.consultarEstoqueCarros(id).subscribe(
        resultado => {
            Swal.fire('Estoque' ,'Carros em estoque: ' + resultado, 'info')
        },
        erro => {
          Swal.fire('Erro ao consultar carros em estoque', erro, 'error')
        }
      )
    }

    public consultarTodasMontadoras(){
      this.MontadoraService.consultarTodas().subscribe(
        resultado => {
          this.montadoras = resultado
        },
        erro => {
          console.log('Erro ao consultar todas montadoras' + erro)
        }
      )
    }
}
