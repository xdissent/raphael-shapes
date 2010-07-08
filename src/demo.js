;
var Demo = {
  paper: null,
  initialize: function() {
    // set paper
    this.paper = Raphael(0, 100, $(window).width(), $(window).height());
  },
  addShape: function(shape) {
    var win = $(window);
    var dim = {width:win.width(), height:win.height()},
        shape
    switch(shape) {
      case "ngon":
        var r = 20 + 80 * Math.random(),
            x = (dim.width - r) * Math.random(),
            y = (dim.height - r) * Math.random(),
            n = 3 + Math.round(11 * Math.random())
        shape = this.paper.ngon(x, y, r, n);
        shape.attr({ fill: "#f03" });
      break;
      case "star":
        var r = 20 + 80 * Math.random(),
            x = (dim.width - r) * Math.random(),
            y = (dim.height - r) * Math.random(),
            n = 3 + Math.round(11 * Math.random())
        shape = this.paper.star(x, y, r, r / 2, n);
        shape.attr({ fill: "#79DE00" });
      break;
      case "polygon":
        var raw_poly = "47.013,30.086 0.087,45.24 49.609,26.648 50.346,17.421 63.277,21.084 110.657,0.228 69.127,21.084 97.674,17.421 59.075,26.648 29.338,45.24",
            x = (dim.width) * Math.random(),
            y = (dim.height) * Math.random(),
            s = 3 * Math.random()
        shape = this.paper.polygon(x, y, raw_poly);
        shape.attr({ fill: "#00C7DC" }).scale(s, s).rotate(360 * Math.random());
      break;
    }
    shape.attr({ opacity: 0.5, "stroke-width": 3, stroke: "#333" })
  }
};

$(document).ready(function() {
  Demo.initialize();
});
