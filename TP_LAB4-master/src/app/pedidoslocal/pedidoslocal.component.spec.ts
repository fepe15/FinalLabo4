import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoslocalComponent } from './pedidoslocal.component';

describe('PedidoslocalComponent', () => {
  let component: PedidoslocalComponent;
  let fixture: ComponentFixture<PedidoslocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoslocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoslocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
