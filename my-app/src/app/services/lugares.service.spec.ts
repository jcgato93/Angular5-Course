import { TestBed, inject } from '@angular/core/testing';

import { LugaresService } from './lugares.service';

describe('LugaresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LugaresService]
    });
  });

  it('should be created', inject([LugaresService], (service: LugaresService) => {
    expect(service).toBeTruthy();
  }));
});
