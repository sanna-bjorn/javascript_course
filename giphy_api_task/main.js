const img = document.querySelector("img");
function changeGifImage() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=zBsFqoIx3tj9BeXTAwLyKBWScuuvuzow&s=cat",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((e) => {
      console.log(e);
    });
}

changeGifImage().then((image) => {
  document.body.innerHTML = getPizzaHtml(image);
  let changeBtn = document.getElementById("change_pic");

  changeBtn.addEventListener("click", (e) => {
    let gifImg = document.querySelector(".gif_images");
    if (gifImg.style.display === "none") {
      gifImg.style.display = "inline";
    } else {
      changeGifImage().then((newGif) => (gifImg.src = newGif.image));
    }
  });
});

//   change_pic.addEventListener("click", (e) => {
//     formModal.classList.remove("active");
//     e.preventDefault();
//   });
