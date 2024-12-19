console.log("JS Loaded");

var countdownElement = document.getElementById("countdown");

var countDownVal = countdownElement.innerHTML;

setInterval(function () {
  countDownVal = countDownVal > 0 ? countDownVal - 1 : 0;
  countdownElement.innerHTML = countDownVal;
}, 1000);
