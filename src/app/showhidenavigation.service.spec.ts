import { TestBed } from '@angular/core/testing';

import { ShowhidenavigationService } from './showhidenavigation.service';

describe('ShowhidenavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowhidenavigationService = TestBed.get(ShowhidenavigationService);
    expect(service).toBeTruthy();
  });
});
