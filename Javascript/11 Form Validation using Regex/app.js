var username = document.getElementById("username");
var loginForm = document.getElementById("login-form");
var usernameErrorPara = document.getElementById("username-error");

username.addEventListener("input", function (e) {
  console.log(e.target.value);
  var pattern = /^[\w]{6,8}$/;
  var currentValue = e.target.value;
  var valid = pattern.test(currentValue);

  if (valid) {
    usernameErrorPara.style.display = "none";
  } else {
    usernameErrorPara.style.display = "block";
  }
});
