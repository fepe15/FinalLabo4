import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBorrarUsuarioComponent } from './btn-borrar-usuario.component';

describe('BtnBorrarUsuarioComponent', () => {
  let component: BtnBorrarUsuarioComponent;
  let fixture: ComponentFixture<BtnBorrarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnBorrarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBorrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
