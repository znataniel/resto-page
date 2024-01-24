import "./style.css";
import contactTab from "./contact-tab";
import homeTab from "./home-tab";
import menuTab from "./menu-tab.js";

const content = document.querySelector("div#content");

function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function clearActive() {
  tabButtons.forEach((btn) => {
    btn.classList.remove("active");
  });
}

const tabButtons = document.querySelectorAll("button.tab");
tabButtons.forEach((e) => {
  e.addEventListener("click", () => {
    clearContent();
    clearActive();
    e.classList.add("active");
    switch (e.textContent) {
      case "Home":
        content.appendChild(homeTab());
        break;
      case "Menu":
        content.appendChild(menuTab());
        break;
      case "Contact":
        content.appendChild(contactTab());
        break;
    }
  });
});

content.appendChild(homeTab());
