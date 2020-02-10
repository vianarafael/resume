import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Contact from "./components/Contact";

const App = () => {
  let [postal, setPostal] = useState("");
  let [add, setAdd] = useState("");
  return (
    <div className="App">
      <div className="resume">
        <Header />
        <Contact
          onClick={e => {
            e.preventDefauld();
            console.log(e);
          }}
        />
      </div>
    </div>
  );
};

export default App;
