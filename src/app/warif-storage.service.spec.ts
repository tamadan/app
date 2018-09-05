import { TestBed, inject } from '@angular/core/testing';

import { WarifStorageService } from './warif-storage.service';

describe('WarifStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarifStorageService]
    });
  });

  it('should be created', inject([WarifStorageService], (service: WarifStorageService) => {
    expect(service).toBeTruthy();
  }));
});
