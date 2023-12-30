import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDisciplinaComponent } from './detalhes-disciplina.component';

describe('DetalhesDisciplinaComponent', () => {
  let component: DetalhesDisciplinaComponent;
  let fixture: ComponentFixture<DetalhesDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
