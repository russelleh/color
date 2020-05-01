const colors = require("./rgb.json")

document.addEventListener("DOMContentLoaded", function(event) {
  var input = document.getElementsByTagName("input")[0];
  input.addEventListener('keyup', function(e) {
    var inputValue = e.target.value.toLowerCase();
    color = colors[inputValue];
    document.getElementsByTagName("BODY")[0].style.backgroundColor = color;
  });

  var rand_index = Math.floor(Math.random() * Object.keys(colors).length);
  input.value = Object.keys(colors)[rand_index];

  var e = document.createEvent('HTMLEvents');
  e.initEvent('keyup', false, true);
  input.dispatchEvent(e);
});
