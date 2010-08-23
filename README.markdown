# Raphaël Shapes plugin - 0.0.2-xdissent

### What is it?
An extension to the Raphael Vector Library.<br/>
Currently it provides the following shapes:<br/>
- polygon (throw in raw SVG polygon string)<br/>
- n-gon<br/>
- star

### What's different?
This version of the shapes extension does not rely on any external libraries (except Raphael).

### Usage

Basic usage:

    // Creates canvas 800 × 500 at 10, 10
    var paper = Raphael(10, 10, 800, 500);

Add a polygon

    // Creates an polygon
    var raw_poly = "47.013,30.086 0.087,45.24 49.609,26.648 50.346,17.421 63.277,21.084 110.657,0.228";
    var polygon = paper.polygon(50, 60, raw_poly);

Update an polygon

    // Updates the polygon
    var new_poly = "47.013,30.086 0.087,45.24 49.609,26.648 50.346,17.421 63.277,21.084 110.657,0.228 69.127,21.084 97.674,17.421 59.075,26.648 29.338,45.24";
    ngon.sett("points", new_poly);

Add a hexagon

    // Creates an n-gon at x 50 and y 60 with radius 100 and 6 sides
    var ngon = paper.ngon(50, 60, 100, 6);

Update an n-gon

    // Updates the n-gon to have 5 edges
    ngon.sett({ points: 5 });
    
    // or
    ngon.sett("points", 5);

Add a star

    // Creates a star at x 200 and y 60 with inner radius 50, outer radius 100 and 9 points
    var star = paper.star(200, 60, 50, 100, 9);

Update a star

    // Updates the star to have 11 points, inner radius 40 and outer radius 120
    star.sett({ points: 11, r1: 40, r2: 120 });

Retrieve the settings of a shape
    
    var type = star.setts.type;
    var points = star.setts.points;
    var radius = star.setts.r;
    ...

### Dependencies
- [Raphael JS](http://raphaeljs.com/)

### Important
- This plugin is still under development

### To-do
- writing tests
- testing with sets
- adding cross
- adding arrow
- animating with sett (morphing shapes)