import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherItemInfo from "../components/WeatherItemInfo";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("WeatherItemInfo", () => {
  it("renders the value", () => {
    render(<WeatherItemInfo value={10} />);
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("renders the name", () => {
    render(<WeatherItemInfo name="Temperature" />);
    expect(screen.getByText("Temperature")).toBeInTheDocument();
  });

  it("renders the unit when provided", () => {
    render(<WeatherItemInfo value={25} unit="°C" />);
    expect(screen.getByText("°C")).toBeInTheDocument();
  });

  it("renders an icon", () => {
    render(
      <WeatherItemInfo
        icon={
          <span role="img" aria-label="thermometer">
            🌡️
          </span>
        }
        name="Feels Like"
        value={20}
        unit="°C"
      />
    );
    expect(
      screen.getByRole("img", { name: /thermometer/i })
    ).toBeInTheDocument();
  });
});
