import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Contact from "./components/Contact";

const App = () => {
  let [basic, setBasic] = useState({});

  const addBasic = basicObj => {
    setBasic((basic = basicObj));
    console.log(basic);
  };

  const show = () => {
    fetch("http://localhost:4000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: "{ basic { name day month year gender } }"
      })
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  const save = () => {
    const mutation = `
    mutation {
    addInfo(name: "${basic.name}", day: "${basic.day}", month: "${basic.month}", year: "${basic.year}", gender: "${basic.gender}") {
      name
      day
      month
      year
      gender
    }
  }
  `;

    fetch("../server.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: mutation })
    })
      .then(res => res.json())
      .then(() => {
        console.log("sent");
      });
  };

  return (
    <div className="App">
      <div className="resume">
        <button onClick={save}>Send to server</button>
        <button onClick={show}>Show Me what you've got</button>
        <Header onAddBasic={addBasic} />
        <Contact />
      </div>
    </div>
  );
};

export default App;
