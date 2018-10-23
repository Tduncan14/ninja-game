// waits for the image and so forth to load.. once the load finish then it calls the function to run
 var x = 0;
 var y = 40;

var image = new Image();
image.src='images/nanonaut.png';

window.addEventListener('load',begin);

// A variable to hold my image



/// Setting up the canvas for the website
var canvas=document.createElement('canvas');
canvas.width=1000;
canvas.height=1000;

var c =canvas.getContext('2d');


// coloring the canvas
function begin (){
/*var c =canvas.getContext('2d');
c.fillStyle='green';
// setting the position  of the canvasS
c.fillRect(10,10,30,30);
c.drawImage(image, 20, 40);
*/
window.requestAnimationFrame(loop);
}

function loop () {
    // drawing code
    c.clearRect(0,0,1000,1000)
    c.drawImage(image, x, y);
    x = x + 1;
    window.requestAnimationFrame(loop);

}
document.body.appendChild(canvas);
