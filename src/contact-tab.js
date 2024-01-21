function contactTab() {
  const content = document.querySelector("div#content");
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
    content.appendChild(para);
  }
}

export default contactTab;
