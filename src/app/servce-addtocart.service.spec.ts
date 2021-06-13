import { TestBed } from '@angular/core/testing';

import { ServceAddtocartService } from './servce-addtocart.service';

describe('ServceAddtocartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServceAddtocartService = TestBed.get(ServceAddtocartService);
    expect(service).toBeTruthy();
  });
});
