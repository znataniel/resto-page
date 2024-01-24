import data from "./menu-data.json";

export default function menuTab() {
  const menuTabDiv = document.createElement("article");
  const menuList = document.createElement("ul");
  for (let i in data) {
    data[i].forEach((element) => {
      const menuItem = document.createElement("li");
      menuItem.textContent = `${element.name}: ${element.description}`;
      menuList.appendChild(menuItem);
    });
  }

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  menuTabDiv.classList.add("menu-tab");
  menuTabDiv.appendChild(menuTitle);
  menuTabDiv.appendChild(menuList);

  return menuTabDiv;
}
