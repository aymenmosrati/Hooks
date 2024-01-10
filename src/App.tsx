import React, { useEffect, useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [search, setSearch] = useState("");
  const [fetch, setFetch] = useState("");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    // fetch
    setFetch(search);
  }, [debouncedSearch]);
  return (
    <div className="App">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <>{fetch}</>
    </div>
  );
}

export default App;
