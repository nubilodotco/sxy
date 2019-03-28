import { TestBed } from '@angular/core/testing';

import { SxyService } from './sxy.service';

describe('SxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SxyService = TestBed.get(SxyService);
    expect(service).toBeTruthy();
  });
});
