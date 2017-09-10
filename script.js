document.addEventListener("DOMContentLoaded", function(event) { 
  var colors = {};
  var color  = 'red';
  var raw    = new XMLHttpRequest();
  raw.open("GET", './rgb.json', false);
  raw.onreadystatechange = function () {
    if(raw.readyState === 4) {
      if(raw.status === 200 || raw.status === 0) {
        colors = JSON.parse(raw.responseText);
      }
    }
  }
  raw.send(null);

  var input = document.getElementsByTagName("input")[0];
  input.addEventListener('keyup', function(e) {
    color = colors[e.target.value];
    document.getElementsByTagName("BODY")[0].style.backgroundColor = color;
  });

  var rand_index = Math.floor(Math.random() * Object.keys(colors).length);
  input.value = Object.keys(colors)[rand_index];

  var e = document.createEvent('HTMLEvents');
  e.initEvent('keyup', false, true);
  input.dispatchEvent(e);
  input.focus();
});
