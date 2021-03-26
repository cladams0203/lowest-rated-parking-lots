import { render, screen } from "@testing-library/react";
import Home from "./Home";

const mockBusinesses = [
  {
    id: 1,
    score: 0,
    image_url: "some image",
    location: {
      address1: "123 the way",
    },
    name: "test card",
    rating: 0,
    review_count: 0,
    url: "yelp",
  },
  {
    id: 2,
    score: 1,
    image_url: "some image2",
    location: {
      address1: "456 the way",
    },
    name: "test card2",
    rating: 1,
    review_count: 1,
    url: "yelp",
  },
];

test("Home component renders with mock data", () => {
  const { getAllByTestId, getByText } = screen;
  render(<Home businesses={mockBusinesses} />);
  expect(getAllByTestId(/card/i)).toHaveLength(2);
  expect(getByText(/456 the way/i)).toBeInTheDocument();
});
