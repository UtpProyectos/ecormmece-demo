import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";

test("muestra productos en la página de inicio", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("Mouse")).toBeInTheDocument();
});
