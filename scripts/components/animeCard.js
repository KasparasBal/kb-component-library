export const animeCards = async (animeList, parentContainer) => {
  const animeObjectArray = await animeList();
  console.log(animeObjectArray);
  animeObjectArray.data.map((anime) => {
    //swiper slide
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    //Anime Card
    const animeCard = document.createElement("div");
    animeCard.classList.add("anime-card");
    //Anime Tiny Image
    const imageUrl = anime.attributes.posterImage.tiny;
    //Background
    const gradient = "var(--gradient)";
    animeCard.style.backgroundImage = `${gradient}, url(${imageUrl})`;
    //Content Container
    const animeCardContentContainer = document.createElement("div");
    animeCardContentContainer.classList.add("anime-card_container");
    //Anime Title
    const animeTitle = document.createElement("h2");
    animeTitle.classList.add("anime-card_title");
    animeTitle.textContent = anime.attributes.canonicalTitle;
    //Anime Description
    const animeDescription = document.createElement("p");
    animeDescription.classList.add("anime-card_description");
    animeDescription.textContent = anime.attributes.description;

    //Additional Info Container
    const animeAdditionalInfoContainer = document.createElement("div");
    animeAdditionalInfoContainer.classList.add(
      "anime-card_additionalInfoContainer"
    );
    //Anime Rating
    const animeRating = document.createElement("p");
    animeRating.classList.add("anime-card_rating");
    if (anime.attributes.averageRating > 80) {
      animeRating.style.backgroundColor = "green";
    } else if (anime.attributes.averageRating > 60) {
      animeRating.style.backgroundColor = "orange";
    } else if (anime.attributes.averageRating > 60) {
      animeRating.style.backgroundColor = "yellow";
    } else {
      animeRating.style.backgroundColor = "red";
    }
    animeRating.textContent = anime.attributes.averageRating;
    //Show Subtype
    const animeSubType = document.createElement("p");
    animeSubType.classList.add("anime-card_subtype");
    animeSubType.textContent = anime.attributes.subtype;

    //Show Status
    const animeStatus = document.createElement("p");
    animeStatus.classList.add("anime-card_status");
    animeStatus.textContent = anime.attributes.status;

    animeAdditionalInfoContainer.appendChild(animeRating);
    animeAdditionalInfoContainer.appendChild(animeSubType);
    animeAdditionalInfoContainer.appendChild(animeStatus);
    animeCardContentContainer.appendChild(animeTitle);
    animeCardContentContainer.appendChild(animeDescription);
    animeCardContentContainer.appendChild(animeAdditionalInfoContainer);
    animeCard.appendChild(animeCardContentContainer);
    slide.appendChild(animeCard);
    parentContainer.appendChild(slide);
  });
  if (window.swiper) {
    window.swiper.update();
  }
};
