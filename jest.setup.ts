import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

global.beforeEach(() => {
  class IntersectionObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
  }

  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  });
});

global.afterEach(cleanup);
