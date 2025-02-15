import { TestBed } from '@angular/core/testing';

import { ViewEmpService } from './view-emp.service';

describe('ViewEmpService', () => {
  let service: ViewEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
