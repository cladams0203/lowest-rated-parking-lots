import CircularProgress from "@material-ui/core/CircularProgress";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading-container">
      <CircularProgress size={100} />
      <p>...LOADING</p>
    </div>
  );
}
