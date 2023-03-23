const BASE_URL = "https://rickandmortyapi.com/api";

export const getAllCharacters = async () => {
  const response = await fetch(`${BASE_URL}/character`);
  const data = await response.json();
  return data;
};

export const getCharacterDetail = async (id: string) => {
  const response = await fetch(`${BASE_URL}/character/${id}`);
  const data = await response.json();
  return data;
};
