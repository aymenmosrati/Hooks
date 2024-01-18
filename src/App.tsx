import React, { useEffect, useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";
import { useLocalStorage } from "./hooks/useLocalStorage";
import ReactHookForm from "./ReactHookForm";

function App() {
  const [search, setSearch] = useState("");
  const [fetch, setFetch] = useState("");
  const [value, setValue] = useState("");
  const debouncedSearch = useDebounce(search);
  const { setItem, getItem, removeItem } = useLocalStorage("value");

  useEffect(() => {
    // fetch
    setFetch(search);
  }, [debouncedSearch]);
  return (
    <div className="App">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <>{fetch}</>
      <div>
        <h1>useLocalStorage</h1>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setItem(value)}>Set</button>
        <button onClick={() => console.log(getItem())}>Get</button>
        <button onClick={removeItem}>Remove</button>
      </div>

      <h1>React hook form</h1>
      <ReactHookForm />
    </div>
  );
}

export default App;
