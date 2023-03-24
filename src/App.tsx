import { Route, Routes } from "@solidjs/router";
import { Component } from "solid-js";
import styles from "./App.module.css";
import Detail from "./Detail";
import Home from "./Home";

// all characters ophalen
// Je kunt naar een single character toe
// Je kunt characters favoriet maken

// Bram: Store
// Arjan: ophalen data
// Wahid: Opbouw componenten /routing en de page

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/characters/:id" component={Detail} />
      </Routes>
    </div>
  );
};

export default App;
