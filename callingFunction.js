     var videoo = "video.mp4";

     function setup() {
         console.log("Set Up Called...");
         board(500, 500);
         var song = audioload("song.mp3");
         //            song.currentTime = 100;
         song.play();
         song.volume = 0.9;
         videoload(videoo);
         //            videoobj.play();
     }
     var itemobj = {
         x: 10
         , speed: 5
         , y: 100
     }

     function drawing() {
         console.log("Draw Called...");
         background('pink');
         foreground('red');
         var img = "text/ghost.png";
         foreground('black');
         var t = "hello world";
         text(t, 200, 200, 50, "Arial");
         drawimage(img, 100, 100, 50, 50);
         line(0, 0, 100, 100);
         foreground("red");
         circle(100, 100, 50, 0, "yellow", 4);
         loadAnimation("text/1char1.png", "text/2char1.png", "text/3char1.png", "text/4char1.png");
         foreground("red");
         var rectobj = rectangle(itemobj.x, itemobj.y, 50, 50);
         foreground("yellow");
         var rectobj = rectangle(200, 200, 50, 50);
         //            moveright(10, rectobj);
         //            x = x + speed;
     }