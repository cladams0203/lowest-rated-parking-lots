import axios from "axios";
require("dotenv").config();

export const api = () => {
  const cors =
    process.env.REACT_APP_DEV === "development"
      ? "https://cors-anywhere.herokuapp.com/"
      : "";
  return axios.create({
    baseURL: `${cors}https://api.yelp.com/v3/businesses/search?term=parking`,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_BEARER}`,
    },
  });
};
