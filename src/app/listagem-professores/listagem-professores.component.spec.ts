import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemProfessoresComponent } from './listagem-professores.component';

describe('ListagemProfessoresComponent', () => {
  let component: ListagemProfessoresComponent;
  let fixture: ComponentFixture<ListagemProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemProfessoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
