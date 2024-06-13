import { Carta } from './carta';

export class Partida {
  id: number;
  jogadorId: number;
  cartas: Carta[] = [];
  estado: string;
  dataInicio: Date;
}
