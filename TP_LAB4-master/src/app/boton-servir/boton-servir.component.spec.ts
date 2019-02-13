import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonServirComponent } from './boton-servir.component';

describe('BotonServirComponent', () => {
  let component: BotonServirComponent;
  let fixture: ComponentFixture<BotonServirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonServirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonServirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
