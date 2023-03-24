import { useParams } from "@solidjs/router";
import { createEffect, createMemo, createSignal } from "solid-js";
import { getCharacterDetail } from "../helpers/api";
import { Character } from "../helpers/interfaces";
import { useAppState } from "./AppProvider";

function Detail() {
  const params = useParams();
  const { id } = params;
  const [likedCharacters] = useAppState();
  const [character, setCharacter] = createSignal<Character | undefined>(
    undefined
  );

  const isLiked = createMemo(() =>
    likedCharacters().includes(parseInt(id, 10))
  );

  createEffect(async () => {
    const data = await getCharacterDetail(id);
    setCharacter(data);
  });

  return (
    <div>
      <h1>Detail of: {character()?.name}</h1>
      <span>Favorite: {isLiked() ? "is liked" : "Is not liked"}</span>
    </div>
  );
}

export default Detail;
