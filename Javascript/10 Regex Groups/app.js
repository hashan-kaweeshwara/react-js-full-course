console.clear();

var str = "+919988776655";

var pattern = /^(\+91)?[\d]{10}$/g;

console.log(str.match(pattern));

var str2 = "www.google.com";

var pattern2 = /^www\.[\w]+\.(com|co|in|org)$/g;

console.log(str2.match(pattern2));
