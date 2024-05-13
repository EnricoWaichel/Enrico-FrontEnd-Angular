import { Jogador } from '../../model/vemProX1/jogador';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JogadorSeletor } from '../../model/seletor/jogador.seletor';

@Injectable({
  providedIn: 'root',
})
export class JogadorService {
  private readonly API =
    'http://localhost:8080/senac-20241-backend-exemplos/rest/jogador';

  constructor(private HttpClient: HttpClient) {}

  salvar(jogador: Jogador): Observable<Jogador> {
    return this.HttpClient.post<Jogador>(this.API, jogador);
  }

  atualizar(Jogador: Jogador): Observable<Jogador> {
    return this.HttpClient.put<Jogador>(this.API, Jogador);
  }

  excluir(id: number): Observable<any> {
    return this.HttpClient.delete(this.API + '/' + id);
  }

  consultar(id: number): Observable<any> {
    return this.HttpClient.get(this.API + '/' + id);
  }
  listarTodos(): Observable<Array<Jogador>> {
    return this.HttpClient.get<Array<Jogador>>(this.API + '/todas');
  }

  listarComSeletor(seletor: JogadorSeletor): Observable<Array<Jogador>> {
    return this.HttpClient.post<Array<Jogador>>(this.API + '/filtrar', seletor);
  }
}
