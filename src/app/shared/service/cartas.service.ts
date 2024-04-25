import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carta } from '../model/carta';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carta'

  constructor(private HttpClient: HttpClient) { }

  listarTodas(): Observable<Array<Carta>> {
    return this.HttpClient.get<Array<Carta>>(this.API + '/todas')
  }
}
