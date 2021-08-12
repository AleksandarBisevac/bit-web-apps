const fetchAllCharacters = () => {
  const endpointAllCharaters = `https://rickandmortyapi.com/api/character`;
  return fetch(endpointAllCharaters).then((response) => response.json());
};

const fetchSingleCharacter = (id) => {
  const endpointSingleCharater = `https://rickandmortyapi.com/api/character/${id}`;
  return fetch(endpointSingleCharater).then((response) => response.json());
};

export { fetchAllCharacters, fetchSingleCharacter };
