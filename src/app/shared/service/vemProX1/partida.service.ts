import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partida } from '../../model/vemProX1/partida';
import { Carta } from '../../model/vemProX1/carta';

@Injectable({
  providedIn: 'root', 
})
export class PartidaService {
  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/partida';

  constructor(private httpClient: HttpClient) {}

  criarPartida(jogadorId: number): Observable<Partida> {
    return this.httpClient.get<Partida>(`${this.API}/iniciar/${jogadorId}`);
  }

  buscarCartas(partidaId: number): Observable<Carta[]> {
    return this.httpClient.get<Carta[]>(`${this.API}/${partidaId}/cartas`);
  }

  realizarJogada(partidaId: number, cartaId: number, atributo: string): Observable<Partida> {
    return this.httpClient.post<Partida>(`${this.API}/jogar`, { partidaId, cartaId, atributo });
  }
}
