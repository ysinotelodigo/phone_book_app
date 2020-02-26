import { TestBed } from '@angular/core/testing';

import { Data.SourceService } from './data.source.service';

describe('Data.SourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Data.SourceService = TestBed.get(Data.SourceService);
    expect(service).toBeTruthy();
  });
});
