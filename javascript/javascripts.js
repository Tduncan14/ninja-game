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
// appending the created element to the child of the body
document.body.appendChild(canvas);

// adding the image with the image object

var nanonautImage= new Image();
// adding the source to it
nanonautImage.src ='images/nanonaut.png';

var nanonautX =50;
var nanonautY=40;

//Once the image is loaded run and call the function
window.addEventListener('load', start);

function start () {
    window.requestAnimationFrame(mainLoop);
}
/// MainLOOP





// Player input


//Updating



//Drawing
