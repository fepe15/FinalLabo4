import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPrepararComponent } from './boton-preparar.component';

describe('BotonPrepararComponent', () => {
  let component: BotonPrepararComponent;
  let fixture: ComponentFixture<BotonPrepararComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonPrepararComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonPrepararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
