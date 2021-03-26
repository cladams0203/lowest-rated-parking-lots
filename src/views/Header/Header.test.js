import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Header renders heading and search component", () => {
  const { getByText, getByLabelText } = screen;
  render(<Header />);
  expect(getByText(/lowest scoring parking app/i)).toBeInTheDocument();
  expect(getByLabelText(/enter location/i)).toBeInTheDocument();
});
