import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AdicionarProfessorComponent } from './adicionar-professor/adicionar-professor.component';

const routes: Routes = [
  
  { path: 'adicionar-professor', component: AdicionarProfessorComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
