import { fetchAnime, fetchTrendingAnime } from "./api.js";
import { animeCards } from "./components/animeCard.js";

const swiperWrapper = document.querySelector(".swiper-wrapper");

// First add the cards
await animeCards(fetchAnime, swiperWrapper);

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
