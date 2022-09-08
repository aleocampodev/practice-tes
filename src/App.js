import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputSearch from "./components/InputSearch";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <InputSearch value={text} onChange={handleChange}>
          {" "}
          Input:
        </InputSearch>
        <p>You typed: {text ? text : "..."}</p>
      </body>
    </div>
  );
}

export default App;
