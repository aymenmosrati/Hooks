import React, { useEffect, useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";
import { useLocalStorage } from "./hooks/useLocalStorage";
import ReactHookForm from "./ReactHookForm";
import useToggle from "./hooks/useToggle";
import ProfilePage from "./profilePage";

function App() {
  const [valuee, toggleValue] = useToggle(false);
  const [search, setSearch] = useState("");
  const [fetch, setFetch] = useState("");
  const [value, setValue] = useState("");
  const debouncedSearch = useDebounce(search);
  const { setItem, getItem, removeItem } = useLocalStorage("value");
  useEffect(() => {
    // fetch
    setFetch(search);
  }, [debouncedSearch]);

  // we will get the subdomain, to find the user details
  // url  ->
  // https://<tenantName>.<domainName>.com
  // -> https://tenantName  , domainName , com
  // -> split(".") -> [https://tenantName  , domainName , com"]
  // => split("//") -> [https:" , "tenantName , domainName  com"]
  const url = window.location.href;
  // const tenantName = url.split(".")[0].split("//")[1];
  const hostname = new URL(url).hostname;
  const subdomain = hostname.split(".")[0];

  if (subdomain === hostname) {
    return <div>Not Found Subdomain</div>;
  }
  return (
    <div className="App">
      <ProfilePage tenantName={subdomain} />
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
      <h1>useToggle hook</h1>
      <div>
        <div>{valuee.toString()}</div>
        {/* <button onClick={() => toggleValue}>Toggle</button>
        <button onClick={() => toggleValue(true)}>Make True</button>
        <button onClick={() => toggleValue(true)}>Make False</button> */}
      </div>
    </div>
  );
}

export default App;
