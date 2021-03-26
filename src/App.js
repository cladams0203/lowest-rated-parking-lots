import { useReducer } from "react";
import { initialState, parkingReducer } from "./state/parkingReducer";
import Search from "./views/Search/Search";
import Home from "./views/Home/Home";
import "./App.scss";

function App() {
  const [state, dispatch] = useReducer(parkingReducer, initialState);
  const { businesses } = state;
  return (
    <div className="App">
      <h1>Lowest Rated Parking App</h1>
      <Search dispatch={dispatch} />
      <Home businesses={businesses} />
    </div>
  );
}

export default App;
