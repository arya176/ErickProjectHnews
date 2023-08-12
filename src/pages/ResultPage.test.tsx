import React from "react";
import { render, screen } from "@testing-library/react";
import { ResultPage } from "./ResultPage";

test("renders learn react link", () => {
  render(<ResultPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
