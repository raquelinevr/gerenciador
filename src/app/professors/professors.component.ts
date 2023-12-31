import { Component, OnInit } from '@angular/core';

interface Professor {
  id: number;
  nome: string;
  email: string;
  disciplinas: string[]; 
}

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {
  professors: Professor[] = [
    
    { id: 1, nome: 'Professor João', email: 'profjoao@email.com', disciplinas: ['Banco de Dados', 'Linguagem de Script'] },
    { id: 2, nome: 'Professor José', email: 'profjose@email.com', disciplinas: ['Desenvolvimento Web', 'Matematica'] }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  addProfessor(): void {
    
  }

  editProfessor(professor: Professor): void {
    
  }

  deleteProfessor(id: number): void {
    
  }
}
