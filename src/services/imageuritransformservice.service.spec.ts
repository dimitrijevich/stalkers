import { TestBed } from '@angular/core/testing';

import { ImageuritransformserviceService } from './imageuritransformservice.service';

describe('ImageuritransformserviceService', () => {
  let service: ImageuritransformserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageuritransformserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
