import { TestBed } from '@angular/core/testing';

import { GaphService } from './gaph.service';

describe('GaphService', () => {
  let service: GaphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
