import contactTab from "./contact-tab";
import homeTab from "./home-tab";
import menuTab from "./menu-tab.js";

function clearContent() {
  const content = document.querySelector("div#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

const tabButtons = document.querySelectorAll("button.tab");
tabButtons.forEach((e) => {
  e.addEventListener("click", () => {
    clearContent();
    switch (e.textContent) {
      case "Home":
        homeTab();
        break;
      case "Menu":
        menuTab();
        break;
      case "Contact":
        contactTab();
        break;
    }
  });
});

homeTab();
