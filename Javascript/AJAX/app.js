function getTODOListFromBackend() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        console.log(JSON.parse(this.responseText));
      } else {
        console.log("Call Failed");
      }
    }
  };
  http.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  http.send();
}

getTODOListFromBackend();
