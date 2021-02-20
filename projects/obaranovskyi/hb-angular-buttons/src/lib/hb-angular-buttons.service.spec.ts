import { TestBed } from '@angular/core/testing';

import { HbAngularButtonsService } from './hb-angular-buttons.service';

describe('HbAngularButtonsService', () => {
  let service: HbAngularButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HbAngularButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
