import { createEffect, createSignal, For } from "solid-js";
import { getAllCharacters } from "../helpers/api";
import { Character } from "../helpers/interfaces";
import LikedCharacters from "./components/LikedCharacters";

function Home() {
  const [likedCharacters, setLikedCharacters] = createSignal([]);
  const [characters, setCharacters] = createSignal<Character[]>([]);

  createEffect(async () => {
    const data = await getAllCharacters();
    setCharacters(data.results);
  });

  const toggleFavorite = (id) => {
    setLikedCharacters(
      likedCharacters().map((character) =>
        character.id !== id ? character : { ...character }
      )
    );
  };

  return (
    <>
      <ul>
        <For each={characters()}>
          {(character) => (
            <li>
              <a href={`/characters/${character.id}`}>
                <figure>
                  <img src={character.image} alt="Main image" />
                  <figcaption class="text-3xl font-bold underline">
                    {character.name} {`(${character.species})`}
                  </figcaption>
                </figure>
                <label>
                  <input
                    type="checkbox"
                    // checked={todo.completed()}
                    onchange={[setLikedCharacters, character.id]}
                  />
                  Add as favorite
                </label>
              </a>
            </li>
          )}
        </For>
      </ul>
      {likedCharacters}
      <For each={likedCharacters()}>{(like) => <span>{like}</span>}</For>
      <LikedCharacters />
    </>
  );
}

export default Home;
