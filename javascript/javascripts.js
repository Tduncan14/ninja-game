/// Setting up the canvas for the website

var canvas=document.createElement('canvas');
canvas.width=800;
canvas.height=600;
document.body.appendChild(canvas);

// coloring the canvas
var canvass =canvas.getContext('2d');
canvass.fillStyle='green';
canvass.fillRect(10,10,30,30);
document.body.appendChild(canvass);
