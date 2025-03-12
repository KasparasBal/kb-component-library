const apiBaseUrl = "https://kitsu.io/api/edge";

const animeBaseUrl = "/anime";
const trendingAnimeUrl = "/trending/anime";

//Fetch All Anime

export const fetchAnime = async () => {
  try {
    const response = await fetch(apiBaseUrl + animeBaseUrl);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
};

//Fetch Trending Anime

export const fetchTrendingAnime = async () => {
  try {
    const response = await fetch(apiBaseUrl + trendingAnimeUrl);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
};
