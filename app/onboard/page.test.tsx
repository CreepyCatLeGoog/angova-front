import React from "react";

import { render } from "@testing-library/react";
import ChooseCodeLanguage from "./page";
describe("OnBoarding Choose Code Language", () => {
  it("should always pass", () => {
    expect(true).toBe(true);
  });
  it("renders correctly, on ", async () => {
    const screen = render(<ChooseCodeLanguage />);
    const p = screen.getByText("Choisi la langue du code la route");
    expect(p).toBeInTheDocument();
  });
});
