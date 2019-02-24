import { TestBed } from '@angular/core/testing';

import { SearchNavbarService } from './search-navbar.service';

describe('SearchNavbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchNavbarService = TestBed.get(SearchNavbarService);
    expect(service).toBeTruthy();
  });
});
