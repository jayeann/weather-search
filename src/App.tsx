import { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="font-bold text-xl ">
        &#x1F324; Welcome to Weather Explorer! &#x1F30D;
      </h1>
      <p className="mb-8">
        Find out the latest weather conditions for your favorite cities{" "}
      </p>
      <div className="card max-w-full">
        <SearchComponent />
      </div>
    </>
  );
}

export default App;
