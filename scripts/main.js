import { fetchAnime, fetchTrendingAnime } from "./api.js";

const mainContainer = document.getElementById("main");

fetchAnime();
fetchTrendingAnime();
