import { fetchAnime, fetchTrendingAnime } from "./api.js";
import { animeCards } from "./components/animeCard.js";

const swiperWrapper1 = document.querySelector(".swiper-wrapper-1");
const swiperWrapper2 = document.querySelector(".swiper-wrapper-2");
//Add Cards
await animeCards(fetchAnime, swiperWrapper1);
await animeCards(fetchTrendingAnime, swiperWrapper2);

// Then initialize swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 5,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Make swiper available globally for updates
window.swiper = swiper;
