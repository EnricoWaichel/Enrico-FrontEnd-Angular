import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carta } from '../model/carta';
import { CartaSeletor } from '../model/seletor/carta.seletor';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carta'

  constructor(private HttpClient: HttpClient) { }

  listarTodas(): Observable<Array<Carta>> {
    return this.HttpClient.get<Array<Carta>>(this.API + '/todas')
  }

  listarComSeletor(seletor: CartaSeletor): Observable<Array<Carta>> {
    return this.HttpClient.post<Array<Carta>>(this.API + '/filtrar', seletor);
  }
}
