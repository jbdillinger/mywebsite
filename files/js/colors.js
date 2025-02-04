function addStyle(str) {
  var sheet = document.createElement('style')
  sheet.innerHTML = str; 
  document.body.appendChild(sheet);
  return sheet;
};

var colors = ["1054B2", "3187FF", "088F1A", "0C6FA9", "B50906", "D79805", "365DCC"];
var hue = Math.floor(Math.random() * 200) + 100; // hue = 201;
var hue = Math.floor(Math.random() * 300);
var color = "hsla(" + hue + ", 73%, 52%, 0.7)";
var color = "#" + colors[Math.floor(Math.random()*colors.length)];
//addStyle(".header { border-color: " + color + " };");

//color = "hsla(" + hue + ", 80%, 45%, 1)";
addStyle("h4,a { color: " + color + " };");


