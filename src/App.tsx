import { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome to my Playground</h1>
      <div className="card">
        <SearchComponent />
      </div>
    </>
  );
}

export default App;
