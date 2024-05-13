import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from '../../model/provaFrontEnd/Carro';
import { CarroSeletor } from '../../model/seletor/carro.seletor';

@Injectable({
  providedIn: 'root',
})
export class CarrosService {
  private readonly API =
    'http://localhost:8080/senac-20241-backend-exemplos/rest/carro/filtro';

  constructor(private HttpClient: HttpClient) {}

  salvar(carro: Carro): Observable<Carro> {
    return this.HttpClient.post<Carro>(this.API, carro);
  }

  atualizar(carro: Carro): Observable<Carro> {
    return this.HttpClient.put<Carro>(this.API, carro);
  }

  excluir(id: number): Observable<any> {
    return this.HttpClient.delete(this.API + '/' + id);
  }

  consultar(id: number): Observable<any> {
    return this.HttpClient.get(this.API + '/' + id);
  }

  listarComSeletor(seletor: CarroSeletor): Observable<Array<Carro>> {
    return this.HttpClient.post<Array<Carro>>(this.API + '/', seletor);
  }
}
