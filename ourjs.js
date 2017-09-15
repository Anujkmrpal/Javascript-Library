var frameCount = 0;
var canvas;
var canvasContext;
var WIDTH;
var HEIGHT;
var arg = 0;
var myAnim;
window.addEventListener("load", function () {
    setup();
    var frameRate = setInterval(function () {
        frameCount++;
        console.log("inside framerate", frameCount);
    }, 50);
    setInterval(drawing, 50);
});

function rectangle(x, y, w, h) {
    canvasContext.fillRect(x, y, w, h);
}

function foreground(color) {
    canvasContext.fillStyle = color;
}

function board(width, height) {
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
//function moveright(speed, object) {
//    objectLeft += speed;
//    object.style.left = objectLeft + 'px';
//    console.log("x value", object);
//}
function audioload(song) {
    var audioObj = new Audio(song);
    //    audioObj.src = song;
    //    audioObj.play();
    return audioObj;
}

function videoload(videosrc) {
    var videoObj = document.createElement("video");
    videoObj.src = videosrc;
    videoObj.controls = true;
    //    canvasContext.appendChild(videoObj);
    //    return videoObj;
    //    canvasContext.drawImage(videoObj, 110, 110, 300, 300);
    //    videoObj.play();
}

function line(x1, y1, xn, yn, color) {
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(0, 0);
    this.canvasContext.lineTo(300, 150);
    this.canvasContext.strokeStyle = color;
    this.canvasContext.closePath();
    this.canvasContext.stroke();
}
var arc = 0;

function circle(x, y, r, arc, rang, cw) {
    this.canvasContext.beginPath();
    this.canvasContext.arc(x, y, r, arc, 2 * Math.PI);
    this.canvasContext.strokeStyle = rang;
    this.canvasContext.lineWidth = cw;
    this.canvasContext.closePath();
    this.canvasContext.stroke();
}

function drawimage(img, x, y, h, w) {
    var imageObj = new Image();
    imageObj.src = img;
    canvasContext.drawImage(imageObj, x, y, h, w);
}

function text(t, x, y, size, fStyle) {
    canvasContext.font = size + "px" + " " + fStyle;
    canvasContext.fillText(t, x, y);
}

function loadAnimation() {
    console.log("length = " + arguments.length);
    //    if (frameCount % 10 = 0) {}
}
//function loadAnimation() {
//    for (arg = 0; arg < arguments.length; arg++) {
//        if (arg < arguments.length) {
//            
//            console.log("aaa", arg);
//            drawimage(arguments[arg], 100, 100, 100, 100);
//        }
//        else {
//            console.log(":else");
//            arg = 0;
//        }
//    }
//}