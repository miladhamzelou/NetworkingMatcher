import { TestBed, inject } from '@angular/core/testing';

import { UserTopicsService } from './user-topics.service';

describe('UserTopicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTopicsService]
    });
  });

  xit('should be created', inject([UserTopicsService], (service: UserTopicsService) => {
    expect(service).toBeTruthy();
  }));
});
