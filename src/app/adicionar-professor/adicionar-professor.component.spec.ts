import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProfessorComponent } from './adicionar-professor.component';

describe('AdicionarProfessorComponent', () => {
  let component: AdicionarProfessorComponent;
  let fixture: ComponentFixture<AdicionarProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarProfessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
