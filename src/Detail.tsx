import { useParams } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { getCharacterDetail } from "../helpers/api";
import { Character } from "../helpers/interfaces";

function Detail() {
  const params = useParams();
  const { id } = params;

  const [character, setCharacter] = createSignal<Character | undefined>(
    undefined
  );

  createEffect(async () => {
    const data = await getCharacterDetail(id);
    setCharacter(data);
  });

  return <h1>Detail of: {character()?.name}</h1>;
}

export default Detail;
