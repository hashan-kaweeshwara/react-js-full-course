function createTODODynamically(id, title) {
  var newListElement = document.createElement("li");
  var textNode = document.createTextNode("title");
  newListElement.appendChild(textNode);
  newListElement.id = id;

  return newListElement;
}

function getTODOListFromBackend() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        var response = JSON.parse(this.responseText);
        for (var i = 0; i < response.length; i++) {
          console.log(createTODODynamically(response[i].id, response[i].title));
        }
      } else {
        console.log("Call Failed");
      }
    }
  };
  http.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  http.send();
}

getTODOListFromBackend();
