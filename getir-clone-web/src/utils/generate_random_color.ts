export function get_random_color() {
  var color = "";
  for (var i = 0; i < 3; i++) {
    var sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length == 1 ? "0" + sub : sub;
  }
  return "#" + color;
}

function get_rand_color() {
  var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}