import { render, screen } from "@testing-library/react";
import App from "./App";

test("Search form and heading present on initial render", () => {
  const { getByText, getByLabelText } = screen;
  render(<App />);
  const heading = getByText(/lowest scoring parking app/i);
  const search = getByLabelText(/enter location/i);
  expect(heading).toBeInTheDocument();
  expect(search).toBeInTheDocument();
});
