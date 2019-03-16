import { TestBed } from '@angular/core/testing';

import { OwnerDetailService } from './owner-detail.service';

describe('OwnerDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnerDetailService = TestBed.get(OwnerDetailService);
    expect(service).toBeTruthy();
  });
});
