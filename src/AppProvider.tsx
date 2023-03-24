import { createContext, createSignal, useContext } from "solid-js";

const AppContext = createContext();

export function AppProvider(props) {
  const [likedCharacters, setLikedCharacters] = createSignal<string[]>([]),
    favorites = [
      likedCharacters,
      {
        toggleFavorite: (id: string) => {
          if (likedCharacters().includes(id)) {
            setLikedCharacters(
              likedCharacters().filter((character) => character !== id)
            );
          } else {
            setLikedCharacters([...likedCharacters(), id]);
          }
        },
      },
    ];

  return (
    <AppContext.Provider value={favorites}>
      {props.children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppContext);
}
