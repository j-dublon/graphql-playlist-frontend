import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <img
          src={require("./logo.png")}
          className="App__header__logo"
          alt="logo"
        />
        <h1>GraphQl Playlist</h1>
      </header>
    </div>
  );
}

export default App;
