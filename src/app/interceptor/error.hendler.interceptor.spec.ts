import { TestBed } from '@angular/core/testing';

import { ErrorHendlerInterceptor } from './error.hendler.interceptor';

describe('ErrorHendlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorHendlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorHendlerInterceptor = TestBed.inject(ErrorHendlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
