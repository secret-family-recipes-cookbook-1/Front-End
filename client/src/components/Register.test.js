import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Register from "./Register";

test("renders register button", () => {
  const wrapper = rtl.render(<Register />);

  const registerButton = wrapper.getByText(/register/i);

  expect(registerButton).toBeVisible();
});
