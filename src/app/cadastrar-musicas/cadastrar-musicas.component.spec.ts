import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMusicasComponent } from './cadastrar-musicas.component';

describe('CadastrarMusicasComponent', () => {
  let component: CadastrarMusicasComponent;
  let fixture: ComponentFixture<CadastrarMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarMusicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
