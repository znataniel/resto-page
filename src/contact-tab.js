function contactTab() {
  const contactTabDiv = document.createElement("article");
  const contactData = {
    address: "Gorriti 6012",
    city: "Buenos Aires",
    country: "Argentina",
    year: 2024,
    phone: "11 3327-9883",
    email: "info@bellavita.com",
  };
  for (let i in contactData) {
    const para = document.createElement("p");
    para.textContent = contactData[i];
    contactTabDiv.appendChild(para);
  }
  contactTabDiv.classList.add("contact-tab");

  return contactTabDiv;
}

export default contactTab;
