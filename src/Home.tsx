import { A } from "@solidjs/router";
import { createEffect, createSignal, For } from "solid-js";
import { getAllCharacters } from "../helpers/api";
import { Character } from "../helpers/interfaces";
import { useAppState } from "./AppProvider";
import LikedCharacters from "./components/LikedCharacters";

function Home() {
  const [characters, setCharacters] = createSignal<Character[]>([]);
  const [likedCharacters, { toggleFavorite }] = useAppState();

  createEffect(async () => {
    const data = await getAllCharacters();
    setCharacters(data.results);
  });

  return (
    <div class="container mx-auto py-10 my-6">
      <ul class="grid gap-5 grid-cols-12 md:grid-cols-4">
        <For each={characters()}>
          {(character) => (
            <li class="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-sm rounded-xl py-6">
              <A href={`/characters/${character.id}`}>
                <figure>
                  <div class="flex flex-wrap justify-center">
                    <div class="flex justify-center w-full">
                      <div class="relative">
                        <img
                          src={character.image}
                          class="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"
                        />
                      </div>
                    </div>
                  </div>
                  <figcaption class="text-center mt-20 py-4">
                    <span class="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">
                      {character.name}
                    </span>
                    <span class="text-sm font-bold tracking-wide text-gray-600 dark:text-gray-300 font-mono text-xl">{`(${character.species})`}</span>
                  </figcaption>
                </figure>
              </A>
              <label class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                <input
                  type="checkbox"
                  checked={likedCharacters().includes(character.id)}
                  onchange={() => toggleFavorite(character.id)}
                />
                Add as favorite
              </label>
            </li>
          )}
        </For>
      </ul>
      {likedCharacters}
      <For each={likedCharacters()}>{(like) => <span>{like}</span>}</For>
      <LikedCharacters />
    </div>
  );
}

export default Home;
