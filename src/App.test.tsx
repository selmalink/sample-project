import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders main navigation links", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Nav items from NavBar: Home and Menu should be present
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /menu/i })).toBeInTheDocument();

  });
});
