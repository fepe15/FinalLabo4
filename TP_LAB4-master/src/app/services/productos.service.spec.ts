import { TestBed, inject } from '@angular/core/testing';

import { ProductosService } from './productos.service';

describe('ProductoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductosService]
    });
  });

  it('should be created', inject([ProductosService], (service: ProductosService) => {
    expect(service).toBeTruthy();
  }));
});
