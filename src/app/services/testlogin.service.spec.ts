import { TestBed } from '@angular/core/testing';

import { TestloginService } from './testlogin.service';

describe('TestloginService', () => {
  let service: TestloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
