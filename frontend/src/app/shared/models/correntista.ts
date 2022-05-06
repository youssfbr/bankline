import { Conta } from "./conta";

export interface Correntista {

  id: number;
  cpf: string;
  nome: string;
  conta: Conta;

}
