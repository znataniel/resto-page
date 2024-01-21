import data from "./menu-data.json";

const content = document.querySelector("div#content");
export default function menuTab() {
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
  content.appendChild(menuTitle);
  content.appendChild(menuList);
}
