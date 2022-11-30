function createGallery(src, alt, text, price) {
  //create flex container for image gallery
  const container = document.createElement("div");
  container.classList.add("container");

  //create images and set source and alt text
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);

  //set a div and description for images
  const desc = document.createElement("div");
  desc.classList.add("description");

  const foodName = document.createElement("div");
  foodName.innerHTML = text;

  const cost = document.createElement("div");
  cost.innerHTML = price;

  //append item details to description
  desc.appendChild(foodName);
  desc.appendChild(cost);

  //append description and image to container
  container.appendChild(img);
  container.appendChild(desc);

  return container;
}

function setActBtn(id) {
  const actBtn = document.querySelector(".tab.active");
  if (actBtn) {
    actBtn.classList.remove("active");
  }
  const menuBtn = document.getElementById(id);
  menuBtn.classList.add("active");
}

function loadMenu() {
  const content = document.getElementById("tab-content");
  content.classList.add("flex");
  setActBtn("menu");
  content.textContent = "";
  const items = [
    createGallery(
      "../resources/fish.jpg",
      "Fish. Do you need to know more?",
      "Finest fish for the finest cats",
      "Price: 10 meows per dish"
    ),
    createGallery(
      "../resources/kibbles.jpg",
      "Kibbles Kudasai",
      "A Japanese style assortment of the finest kibbles",
      "100¥ or 15 meows per dish"
    ),
  ];

  items.forEach((food) => {
    content.append(food);
  });
}
export default loadMenu;
