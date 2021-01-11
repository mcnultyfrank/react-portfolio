import React from "react";
import { render } from "@testing-library/react";
import Portfolio from "./Portfolio";

describe("Portfolio tests", () => {
  it("should render", () => {
    expect(render(<Portfolio />)).toBeTruthy();
  });
});
