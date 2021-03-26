import { RESULTS, ERROR, LOADING } from "./parkingActions";
import { calcScore } from "../utils/calcScore";

export const initialState = {
  businesses: [],
  region: {},
  total: 0,
  loading: false,
  error: "",
};

export const parkingReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESULTS:
      const sorted = action.payload.businesses.map((biz) => {
        return {
          ...biz,
          score:
            Math.floor(calcScore(biz.review_count, biz.rating) * 100) / 100,
        };
      });
      return {
        ...state,
        loading: false,
        businesses: sorted.sort((a, b) => a.score - b.score),
        region: action.payload.region,
        total: action.payload.total,
      };
    default:
      return state;
  }
};
