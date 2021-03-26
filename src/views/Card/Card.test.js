import { render, screen } from "@testing-library/react";
import Card from "./Card";

const mockData = {
  score: 0,
  image_url: "some image",
  location: {
    address1: "123 the way",
  },
  name: "test card",
  rating: 0,
  review_count: 0,
  url: "yelp",
};

test("Card renders with mock data", () => {
  const { getByText } = screen;
  render(<Card biz={mockData} />);
  expect(getByText(/test card/i)).toBeInTheDocument();
  expect(getByText(/score: 0/i)).toBeInTheDocument();
  expect(getByText(/123 the way/i)).toBeInTheDocument();
  expect(getByText(/rating: 0/i)).toBeInTheDocument();
  expect(getByText(/reviews: 0/i)).toBeInTheDocument();
});
