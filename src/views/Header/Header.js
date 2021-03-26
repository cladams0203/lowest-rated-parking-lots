import Search from "../Search/Search";
import "./Header.scss";

export default function Header({ dispatch }) {
  return (
    <div className="header-container">
      <h1>Lowest Scoring Parking App</h1>
      <Search dispatch={dispatch} />
    </div>
  );
}
