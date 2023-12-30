import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfessoresComponent } from './listagem-professores/listagem-professores.component';
import { AdicionarProfessorComponent } from './adicionar-professor/adicionar-professor.component';


@NgModule({
  declarations: [
    ProfessoresComponent,
    AdicionarProfessorComponent,

  ],
  imports: [
    BrowserModule,
  ],
  providers: [], 
  bootstrap: [ProfessoresComponent] 
})
export class AppModule { }
