import { api } from "../utils/api";

export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const RESULTS = "RESULTS";

export const getParking = (location, dispatch) => {
  dispatch({ type: LOADING });
  api()
    .get(`&location=${location}`)
    .then((res) => {
      dispatch({ type: RESULTS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err.message });
    });
};
