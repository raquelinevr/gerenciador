import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Professor } from './models/professor.model';



@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  private readonly baseURL = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  getProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.baseURL}/professores`);
  }
  

  criarProfessor(professor: any) {
    return this.http.post(`${this.baseURL}/professores`, professor);
  }

  adicionarProfessor(professor: Professor): Observable<any> {
    return this.http.post(`${this.baseURL}/professores`, professor);
  }

  atualizarProfessor(id: number, professor: any) {
    return this.http.put(`${this.baseURL}/professores/${id}`, professor);
  }

  excluirProfessor(id: number) {
    return this.http.delete(`${this.baseURL}/professores/${id}`);
  }
}
