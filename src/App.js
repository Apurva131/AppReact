import React from "react";
import "./styles.css";
import AppAccordion from "./Accordion.js";
import Monsters from "./Monsters.js";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Welcome </h1>
      <h2>Start learning react with Apurva!</h2>
      <AppAccordion></AppAccordion>
      <Monsters></Monsters>
    </div>
  );
}
