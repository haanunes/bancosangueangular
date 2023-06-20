import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentualObesosPorSexoComponent } from './percentual-obesos-por-sexo.component';

describe('PercentualObesosPorSexoComponent', () => {
  let component: PercentualObesosPorSexoComponent;
  let fixture: ComponentFixture<PercentualObesosPorSexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentualObesosPorSexoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentualObesosPorSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
