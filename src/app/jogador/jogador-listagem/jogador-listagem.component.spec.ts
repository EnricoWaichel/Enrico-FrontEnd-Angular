import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorListagemComponent } from './jogador-listagem.component';

describe('JogadorListagemComponent', () => {
  let component: JogadorListagemComponent;
  let fixture: ComponentFixture<JogadorListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogadorListagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JogadorListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
