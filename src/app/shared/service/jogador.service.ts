import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carta } from '../model/carta';
import { CartaSeletor } from '../model/seletor/carta.seletor';

@Injectable({
  providedIn: 'root',
})
export class CartasService {
  private readonly API =
    'http://localhost:8080/senac-20241-backend-exemplos/rest/carta';

  constructor(private HttpClient: HttpClient) {}

  salvar(carta: Carta): Observable<Carta> {
    return this.HttpClient.post<Carta>(this.API, carta);
  }

  atualizar(carta: Carta): Observable<Carta> {
    return this.HttpClient.put<Carta>(this.API, carta);
  }

  excluir(id: number): Observable<any> {
    return this.HttpClient.delete(this.API + '/' + id);
  }

  consultar(id: number): Observable<any> {
    return this.HttpClient.get(this.API + '/' + id);
  }
  listarTodas(): Observable<Array<Carta>> {
    return this.HttpClient.get<Array<Carta>>(this.API + '/todas');
  }

  listarComSeletor(seletor: CartaSeletor): Observable<Array<Carta>> {
    return this.HttpClient.post<Array<Carta>>(this.API + '/filtrar', seletor);
  }
}
