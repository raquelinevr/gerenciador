import { Component } from '@angular/core';
import { Professor } from '../models/professor.model';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-adicionar-professor',
  templateUrl: './adicionar-professor.component.html',
  styleUrls: ['./adicionar-professor.component.css']
})
export class AdicionarProfessorComponent {
  novoProfessor: Professor = new Professor();

  constructor(private professorService: ProfessoresService) {}

  adicionarProfessor(): void {
    this.professorService.adicionarProfessor(this.novoProfessor)
  .subscribe(() => {
    
  }, _ => {
    
  });

  }
}
