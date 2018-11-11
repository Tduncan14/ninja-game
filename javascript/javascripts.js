// Constants
// width of the canvas
var canvasWidth = 800;
//height of of the canvas
var canvasHeight = 600;
//  The height of the character229
var nanonautHeight = 229;
//width of the character
var nanonautWidth = 181;

// The width of the character
var groundY = 540;

const spaceKeyCode = 32; 

// vertical jumping speed
var nanonautJumpSpeed = 20;
// adding movement
var nanonautXSpeed = 5;
// create a scrolling background and with
var backgroundWidth=1000;

// how many frames per row
var nanonautNrFramesPerRow = 5;
var nanonautNrAnimationFrames = 7;


// animation speed
var nanonautAnimationSpeed = 4;









// SETUP
// Creates the canvas
var canvas = document.createElement('canvas');
// allows you to draw on the canvas
var c = canvas.getContext('2d');
// speed increase from falling sky suppose to increase each time
var nanonautYacceleration = 1;
// nanonaut speed
var nanonautYspeed =0;
var spaceKeyIsPressed =false;
var nanonautIsInTheAir = false;

var nanonautFramenr = 0;

var gameFrameCounter = 0;

// for the game can scroll

var cameraX =0;
var cameraY = 0;





// attaching to the canvas
canvas.width = canvasWidth;
// attaching to canvas height
canvas.height = canvasHeight;

// draws the background


// appending the created element to the child of the body
document.body.appendChild(canvas);

// adding the image with the image object section

var nanonautImage= new Image();
// adding the source to it
nanonautImage.src ='images/animatedNanonaut.png';

var nanonautX =canvasWidth / 2;
var nanonautY=groundY -nanonautHeight;


var backgroundImage = new Image();
backgroundImage.src ="images/background.png";

var bushImage = new Image();
bushImage.src = "images/bush1.png";


//Once the image is loaded run and call the function
window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

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

function onKeyDown(event){
if(event.keyCode === spaceKeyCode){
    spaceKeyIsPressed = true;
    console.log("working");
}
}

function onKeyUp(event){
    if(event.keyCode === spaceKeyCode){
        spaceKeyIsPressed = false;
        console.log("not working");
    }
}

//Updating
function update(){
nanonautX = nanonautX + nanonautXSpeed;
      

if(spaceKeyIsPressed && !nanonautIsInTheAir){
    nanonautYspeed =- nanonautJumpSpeed;
    nanonautIsInTheAir = true;

}
 
    nanonautY = nanonautY + nanonautYspeed;
    nanonautYspeed = nanonautYspeed + nanonautYacceleration;
    nanonautY = nanonautY +1;
// allows the ninja to jump


    if(nanonautY > (groundY-nanonautHeight)){
        nanonautY = groundY-nanonautHeight;
        nanonautYspeed=0;
        nanonautIsInTheAir = false;
        console.log("show false"); 
    }
   
   cameraX = nanonautX -150;

   //update the drawings
 /*  nanonautFramenr = nanonautFramenr + 1;
   if(nanonautFramenr >= nanonautNrAnimationFrames){
       nanonautFramenr = 0;
   }
  */
 gameFrameCounter = gameFrameCounter + 1;

 if((gameFrameCounter % nanonautAnimationSpeed) === 0){
     nanonautFramenr = nanonautFramenr + 1;

 if(nanonautFramenr >= nanonautNrAnimationFrames){
     nanonautFramenr = 0;
 }
 }
} 



//Drawing
function draw() {
  // c.fillStyle = 'lightSkyBlue';
   // the coordinates for the sky
   c.fillRect(0,0,canvasWidth, groundY-40);
   var backgroundX = - (cameraX % backgroundWidth);
   c.drawImage(backgroundImage,backgroundX,-210);
   c.drawImage(backgroundImage,backgroundX + backgroundWidth,-210);

   // drawing the bush code
  c.drawImage(bushImage,550, groundY -100);
   // drawing the ground
   c.fillStyle = 'forestGreen';
   c.fillRect(0,groundY-40,canvasWidth,canvasHeight -groundY + 40);

    // draw the player

    var nanonautSpriteSheetRow = Math.floor(nanonautFramenr/nanonautNrFramesPerRow);
    var nanonautSpriteSheetColumn = nanonautFramenr % nanonautNrFramesPerRow;
    var nanonautSpriteSheetX = nanonautSpriteSheetColumn *nanonautWidth;
    var nanonautSpriteSheetY = nanonautSpriteSheetRow * nanonautHeight;
    c.drawImage(nanonautImage,nanonautSpriteSheetX,nanonautSpriteSheetY,nanonautWidth,nanonautHeight,nanonautX-cameraX,nanonautY-cameraY,
    nanonautWidth,nanonautHeight);


}