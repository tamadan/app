import { TestBed, inject } from '@angular/core/testing';

import { WarifMapService } from './warif-map.service';

describe('WarifMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarifMapService]
    });
  });

  it('should be created', inject([WarifMapService], (service: WarifMapService) => {
    expect(service).toBeTruthy();
  }));
});
