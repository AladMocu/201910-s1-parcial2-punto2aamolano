import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHeroesComponent } from './listar-heroes.component';

describe('ListarHeroesComponent', () => {
  let component: ListarHeroesComponent;
  let fixture: ComponentFixture<ListarHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
