// Constants
// width of the canvas
const canvasWidth = 800;
//height of of the canvas
const canvasHeight = 600;
//  The height of the character
const nanonautWidth = 181;
// The width of the character
const groundY = 540;



// SETUP
// Creates the canvas
var canvas = document.createElement('canvas');
// allows you to draw on the canvas
var c = canvas.getContext('2d');
// attaching to the canvas
canvas.width = canvasWidth;
// attaching to canvas height
canvas.height = canvasHeight;

// draws the background


// appending the created element to the child of the body
document.body.appendChild(canvas);

// adding the image with the image object

var nanonautImage= new Image();
// adding the source to it
nanonautImage.src ='images/nanonaut.png';

var nanonautX =50;
var nanonautY=40;


var backgroundImage = new Image();
backgroundImage.src ="images/background.png";


//Once the image is loaded run and call the function
window.addEventListener('load', start);

function start () {
    window.requestAnimationFrame(mainLoop);
}
/// MainLOOP
 function mainLoop(){
     update();
     draw();
     window.requestAnimationFrame(mainLoop);
 }




// Player input


//Updating
function update(){

}



//Drawing
function draw() {
  // c.fillStyle = 'lightSkyBlue';
   // the coordinates for the sky
   c.fillRect(0,0,canvasWidth, groundY-40);
   c.drawImage(backgroundImage,0,-210);
   

   // drawing the ground
   c.fillStyle = 'forestGreen';
   c.fillRect(0,groundY-40,canvasWidth,canvasHeight -groundY + 40);
    // draw the player

    c.drawImage(nanonautImage,nanonautX,nanonautY);
}