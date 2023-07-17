// import React from "react";
// import "./App.css";
import { Body } from "./components/body/Body";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="flex flex-col">
      <Header headline={"Top Stories From HackerNews By Arya"} />
      <Body />
    </div>
  );
}

export default App;
