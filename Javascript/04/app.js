var mainHeading = document.getElementById("main-heading");
var btn = document.getElementById("btn-click");

mainHeading.classList.add("big");

btn.addEventListener("click", function () {
  mainHeading.classList.remove("big");
});
