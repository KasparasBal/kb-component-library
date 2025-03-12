import { fetchAnime, fetchTrendingAnime } from "./api.js";
import { animeCards } from "./components/animeCard.js";

const mainContainer = document.getElementById("main");

animeCards(fetchAnime, mainContainer);
