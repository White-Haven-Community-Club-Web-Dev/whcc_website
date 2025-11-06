import { TestBed } from '@angular/core/testing';

import { ProjectLandingService } from './project-landing.service';

describe('ProjectLandingService', () => {
  let service: ProjectLandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectLandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
