export default function homeTab() {
  const homeTabDiv = document.createElement("article");
  const restoDesc =
    "Welcome to Bella Vita, where the warmth of Italy meets the heart of our town! Our charming Italian restaurant is the perfect destination for a cozy night out with friends or a romantic evening for two. Our chefs use only the freshest ingredients, made fresh daily, to create delicious pasta dishes and pizzas cooked to perfection in our wood-fired oven. Our friendly and attentive staff will make you feel right at home, ensuring an unforgettable dining experience. Join us for a taste of Italy in the heart of our town!";

  const pageDesc = document.createElement("p");
  pageDesc.textContent = restoDesc;
  homeTabDiv.appendChild(pageDesc);
  homeTabDiv.classList.add("home-tab");

  return homeTabDiv;
}
