var mainHeading = document.getElementById("main-heading");
var btnDecFont = document.getElementById("btn-dec");
var btnincFont = document.getElementById("btn-inc");

var initialFontSize = window.getComputedStyle(mainHeading).fontSize;
initialFontSize = parseInt(
  initialFontSize.substring(0, initialFontSize.length - 2)
);

btnincFont.onclick = function () {
  initialFontSize += 10;
  mainHeading.style.fontSize = initialFontSize + "px";
};

btnDecFont.onclick = function () {
  initialFontSize -= 10;
  mainHeading.style.fontSize = initialFontSize + "px";
};
