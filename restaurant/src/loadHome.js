function createAbout() {
  //about section
  const about = document.createElement("div");

  //title
  const title = document.createElement("h2");
  title.textContent = "ABOUT";

  about.appendChild(title);

  //about para
  const para = document.createElement("p");
  para.innerHTML = `Want some overpriced food stuffed down your
    throat by a bunch of overpolite waiters? Want to show your date 
    how rich you really are? Dope Stuff is the place for you! 
    Our prices are bad for your heart as well as your wallet. `;

  about.appendChild(para);
  return about;
}

function setActBtn(id) {
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) {
    activeBtn.classList.remove("active");
  }
  const homeBtn = document.getElementById(id);
  homeBtn.classList.add("active");
}

function loadHome() {
  // Add icon to the pages div
  const pageContentImage = document.createElement("img");
  pageContentImage.setAttribute("src", "../resources/cat.jpg");
  pageContentImage.classList.add("cat-image");
  pageContent.appendChild(pageContentImage);
  pageDiv.appendChild(pageContent);
  const content = document.getElementById("tab-content");
  content.classList.add("flex");

  content.innerHTML = "";

  const aboutSec = createAbout();
  //setActBtn('home');

  content.appendChild(aboutSec);
}
console.log("does this work");

export default loadHome;
