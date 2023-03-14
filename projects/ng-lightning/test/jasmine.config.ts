import { toHaveCssClass, toHaveText } from './jasmine.matchers';

export function jasmineConfig() {


// Timeouts
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// Matchers
  beforeEach(() => {
    jasmine.addMatchers({
      toHaveCssClass,
      toHaveText,
    });
  });

}
