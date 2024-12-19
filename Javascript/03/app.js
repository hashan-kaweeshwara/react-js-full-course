var btn = document.getElementById("btn-click");
var mainDiv = document.querySelector("body");

// function onBtnClick() {
// alert("Button Clicked");
// }

// btn.onclick = onBtnClick;

// btn.addEventListener("click", onBtnClick);

function onBtnClick() {
  // alert(
  //   "rgb(" +
  //   Math.floor(Math.random() * 255) +
  //   "," +
  //   Math.floor(Math.random() * 255) +
  //   "," +
  //   Math.floor(Math.random() * 255) +
  //   ")"
  // );

  mainDiv.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";

  btn.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";

  btn.style.color =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";
}

btn.onclick = onBtnClick;
