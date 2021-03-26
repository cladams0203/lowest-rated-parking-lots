import { useState } from "react";
import { getParking } from "../../state/parkingActions";

export default function Search({ dispatch }) {
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getParking(form, dispatch);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Enter Location: </label>
        <input
          id="location"
          onChange={handleChange}
          value={form}
          placeholder="Chicago"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
