import { TestBed } from '@angular/core/testing';

import { MarcasCarroService } from './marcas-carro.service';

describe('MarcasCarroService', () => {
  let service: MarcasCarroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcasCarroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
