
/* For all functions
First, find the item <canvas>.
Then call your method getContext () and pass the string "2d".
(this) to work for more than one element <canvas>.
beginPath () and closePath () A path that starts and ends.
stroke () draws the outline of the line.
*/

/* DrawLine () draws a line from one point to another point.
moveTo () Draw a line using a starting point.
lineTo () Draws a line from the location from the starting point to where it indicated the parameters width, height.
*/
$.fn.drawLine = function (x, y, width, height) {
    context = $(this)[0].getContext("2d");
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(width, height);
    context.stroke();
    context.closePath();
}

/* DrawCircle) Create a circle with the arc method.
        has 5 parameters:
xC: x coordinate of the center point of the arc.
yC: coordinate of the center point of the arc.
radius: radius of the arc.
"0": angle in radians of the arc is started.
Math.PI * 2: angle in radians in the arc ending.
true: Determines if the draw direction is counterclockwise.
*/
$.fn.drawCircle = function (xC, yC, radius) {
    context = $(this)[0].getContext("2d");
    context.beginPath();
    context.arc(xC, yC, radius, 0, Math.PI * 2, true);
    context.stroke();
    context.closePath();
    //context.fill();//relleno
}

/* DrawRectangle () Create a rectangle with rect method.
has 4 parameters:
x0, y0: x coordinate of the start point of the rectangle.
width: width of the rectangle.
height: height of the rectangle.
*/
$.fn.drawRectangle = function (x0, y0, width, height) {
    context = $(this)[0].getContext("2d");
    context.beginPath();
    context.rect(x0, y0, width, height);
    context.stroke();
    context.closePath();
    // ctx.fill();
}

/* DrawTriangle () draw a triangle. A triangle is defined by three points (x0, y0), (x1, y1), (x2, y2).
To draw a triangle starts from:
The point (x0, y0) and draw a line through (x1, y1),
and from the point (x1, y1) to the point (x2, y2),
close the triangle after drawing a line from (x2, y2) to (x0, y0).
*/
$.fn.drawTriangle = function (x0, y0, x1, y1, x2, y2) {
    context = $(this)[0].getContext("2d");
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);

    context.moveTo(x1, y1);
    context.lineTo(x2, y2);

    context.moveTo(x2, y2);
    context.lineTo(x0, y0);

    context.stroke();
    context.closePath();
    //context.fill();
}

/*drawImage () method that requires an object image and a destination point.
The target point defines the upper left corner of the image with
respect to the upper left corner of the canvas.
width: width of the image.
height: height of the image.
*/
$.fn.drawImage = function (imageUrl, x, y, width, height) {
    context = $(this)[0].getContext("2d");
    context.beginPath();
    var img = new Image();
    img.src = imageUrl;
    context.drawImage(img, x, y, width, height);
    context.closePath();
}
