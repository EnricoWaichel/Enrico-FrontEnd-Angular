import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorDetalheComponent } from './jogador-detalhe.component';

describe('JogadorDetalheComponent', () => {
  let component: JogadorDetalheComponent;
  let fixture: ComponentFixture<JogadorDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogadorDetalheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JogadorDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
