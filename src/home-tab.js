import italianRestaurantImage from "./traditional-italian-restaurant-milan-lombardy-italy-EFJXMJ.jpeg";

function initLoad() {
  const content = document.querySelector("div#content");
  const restoName = "Bella Vita Ristorante";
  const restoDesc =
    "Welcome to Bella Vita, where the warmth of Italy meets the heart of our town! Our charming Italian restaurant is the perfect destination for a cozy night out with friends or a romantic evening for two. Our chefs use only the freshest ingredients, made fresh daily, to create delicious pasta dishes and pizzas cooked to perfection in our wood-fired oven. Our friendly and attentive staff will make you feel right at home, ensuring an unforgettable dining experience. Join us for a taste of Italy in the heart of our town!";

  const pageTitle = document.createElement("h1");
  pageTitle.textContent = restoName;

  const pageDesc = document.createElement("p");
  pageDesc.textContent = restoDesc;

  const mainImage = new Image();
  mainImage.src = italianRestaurantImage;
  mainImage.classList.add("home-pic");

  content.appendChild(pageTitle);
  content.appendChild(mainImage);
  content.appendChild(pageDesc);
}

export default initLoad;
