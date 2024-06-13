import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPartidaComponent } from './nova-partida.component';

describe('NovaPartidaComponent', () => {
  let component: NovaPartidaComponent;
  let fixture: ComponentFixture<NovaPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaPartidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovaPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
