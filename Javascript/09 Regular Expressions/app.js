console.clear();

var str = "This is a smooth pen. It is a parker pen. This is a black ball PEN";

var pattern = /pen/gi;

// var pattern = new RegExp("pen", "gi");

console.log(str.match(pattern));
