import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaIdadeGrupoSanguineoComponent } from './media-idade-grupo-sanguineo.component';

describe('MediaIdadeGrupoSanguineoComponent', () => {
  let component: MediaIdadeGrupoSanguineoComponent;
  let fixture: ComponentFixture<MediaIdadeGrupoSanguineoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaIdadeGrupoSanguineoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaIdadeGrupoSanguineoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
