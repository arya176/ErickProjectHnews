// import React from "react";
// import "./App.css";
import { Body } from "./components/body/Body";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="flex flex-col">
      <Header headline={"Top Stories From HackerNews By Arya"} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
