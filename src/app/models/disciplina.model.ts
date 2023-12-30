// disciplina.model.ts
import { Professor } from './professor.model';

export class Disciplina {
  id: number;
  nome: string;
  cargaHoraria: number;
  professor: Professor;

  constructor(id: number, nome: string, cargaHoraria: number, professor: Professor) {
    this.id = id;
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
    this.professor = professor;
  }
}
