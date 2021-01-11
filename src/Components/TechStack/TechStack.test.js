import React from "react";
import { render } from "@testing-library/react";
import TechStack from "./TechStack";

describe("TechStack tests", () => {
  it("should render", () => {
    expect(render(<TechStack />)).toBeTruthy();
  });
});
