import { Component, createEffect, createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";
import styles from "./App.module.css";
import { getAllCharacters } from "../helpers/api";
import { Character } from "../helpers/interfaces";
import { LikedCharacters } from "./components/LikedCharacters";
import { Route, Routes } from "@solidjs/router";
import Home from "./Home";
import Detail from "./Detail";

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
