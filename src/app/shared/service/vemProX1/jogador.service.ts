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

  atualizar(jogador: Jogador): Observable<Jogador> {
    return this.HttpClient.put<Jogador>(this.API, jogador);
  }

  excluir(id: number): Observable<any> {
    return this.HttpClient.delete(`${this.API}/${id}`);
  }

  consultar(id: number): Observable<any> {
    return this.HttpClient.get(`${this.API}/${id}`);
  }

  listarTodos(): Observable<Jogador[]> {
    return this.HttpClient.get<Jogador[]>(`${this.API}/todos`);
  }

  listarComSeletor(seletor: JogadorSeletor): Observable<Jogador[]> {
    return this.HttpClient.post<Jogador[]>(`${this.API}/filtrar`, seletor);
  }
}
