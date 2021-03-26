import { useReducer } from "react";
import { initialState, parkingReducer } from "./state/parkingReducer";
import Header from "./views/Header/Header";
import Home from "./views/Home/Home";
import "./App.scss";

function App() {
  const [state, dispatch] = useReducer(parkingReducer, initialState);
  const { businesses } = state;
  return (
    <div className="App">
      <Header dispatch={dispatch} />
      <Home businesses={businesses} />
    </div>
  );
}

export default App;
