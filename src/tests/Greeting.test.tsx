import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "../components/Greeting";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Greeting", () => {
  it("renders a default greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("🌤 Welcome to the Weather App! 🌍"));
  });

  it("renders a greeting with name", () => {
    render(<Greeting text="my App" />);
    const text = screen.getByText("🌤 Welcome to my App! 🌍");
    expect(text).toBeInTheDocument();
  });
});
