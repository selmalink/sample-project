import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // optional: a real assertion
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  });
});
