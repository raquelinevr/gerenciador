// professor.model.ts
import { Disciplina } from './disciplina.model';

export class Professor {
  id?: number;
  nome?: string;
  email?: string;
  disciplinas?: Disciplina[]; 

  constructor(id?: number, nome?: string, email?: string, disciplinas?: Disciplina[]) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.disciplinas = disciplinas;
  }
}
