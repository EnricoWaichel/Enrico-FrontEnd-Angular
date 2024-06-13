
export class Carta {
  id: number;
  nome: string;
  forca: number;
  inteligencia: number;
  velocidade: number;
  dataCadastro: Date;
  usada: boolean;

  constructor(
    id: number,
    nome: string,
    forca: number,
    inteligencia: number,
    velocidade: number,
    dataCadastro: Date,
    utilizada: boolean = false
  ) {
    this.id = id;
    this.nome = nome;
    this.forca = forca;
    this.inteligencia = inteligencia;
    this.velocidade = velocidade;
    this.dataCadastro = dataCadastro;
    this.usada = utilizada;
  }
}
