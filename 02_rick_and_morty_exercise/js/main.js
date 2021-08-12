import {
  fetchAllCharacters,
  fetchSingleCharacter,
} from "./modules/fetch_methods.js";

import { displayAllCharacters, selectCharacter } from "./modules/functions.js";
let key = localStorage.getItem("id");
const row_content = document.querySelector("#row-content");
console.log(fetchAllCharacters());
//console.log(fetchSingleCharacters());

fetchAllCharacters().then((data) => {
  displayAllCharacters(data, row_content);
});

selectCharacter().then((key) => fetchSingleCharacter(key));
