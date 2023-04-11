import { TestBed } from '@angular/core/testing';

import { PreferencesCheckerGuard } from './preferences-checker.guard';

describe('PreferencesCheckerGuard', () => {
  let guard: PreferencesCheckerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreferencesCheckerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
