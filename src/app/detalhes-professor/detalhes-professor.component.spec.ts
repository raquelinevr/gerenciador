import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProfessorComponent } from './detalhes-professor.component';

describe('DetalhesProfessorComponent', () => {
  let component: DetalhesProfessorComponent;
  let fixture: ComponentFixture<DetalhesProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesProfessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
