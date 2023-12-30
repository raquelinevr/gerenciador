import { Component } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './listagem-professores.component.html',
  styleUrls: ['./listagem-professores.component.css']
})
export class ProfessoresComponent {
  professores = [
    { nome: 'Joao Silva', disciplina: 'Banco de Dados', email: 'joao@edu.br' },
    { nome: 'José Vieira', disciplina: 'Redes de Computadores', email: 'vieira@edu.br' },
    { nome: 'Maria Luz', disciplina: 'Português', email: 'luz@edu.br' }
  ];

  selectedProfessor: any;

  showDetails(professor: any): void {
    this.selectedProfessor = professor;
  }
}
