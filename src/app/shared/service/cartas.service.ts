import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carta } from '../model/carta';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  private readonly API = 'http://localhost:8080'

  constructor(private HttpClient: HttpClient) { }
}
