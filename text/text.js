window.addEventListener("load", function () {
    setup();
    setInterval(draw, 50);
});
var canvas;
var canvasContext;
var WIDTH;
var HEIGHT;

function createCanvas(width, height) {
    WIDTH = width;
    HEIGHT = height;
    canvas = document.createElement("canvas");
    canvasContext = canvas.getContext("2d");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    document.body.appendChild(canvas);
}

function background(color) {
    canvasContext.clearRect(0, 0, 500, 500);
    canvas.style.backgroundColor = color;
}


function text(text, x, y) {
    canvasContext.fillText(text, x, y);
}

function fontandsize(size, font) {
    canvasContext.font = "size, font";
}
function image(img, x, y, h, w) {
    var imageObj = new Image();
    imageObj.src = img;
    canvasContext.drawImage(imageObj, x, y, h, w);
}