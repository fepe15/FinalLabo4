import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSuspenderComponent } from './boton-suspender.component';

describe('BotonSuspenderComponent', () => {
  let component: BotonSuspenderComponent;
  let fixture: ComponentFixture<BotonSuspenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonSuspenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonSuspenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
