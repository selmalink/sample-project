import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// clean DOM after each test
afterEach(() => {
  cleanup();
});