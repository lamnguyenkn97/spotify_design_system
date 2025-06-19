/// <reference types="jest" />

import { cleanup } from '@testing-library/react';

// Cleanup after each test
afterEach(() => {
  cleanup();
}); 