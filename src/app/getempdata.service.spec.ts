import { TestBed } from '@angular/core/testing';

import { GetempdataService } from './getempdata.service';

describe('GetempdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetempdataService = TestBed.get(GetempdataService);
    expect(service).toBeTruthy();
  });
});
