function getRadian(degree){
    return degree * Math.PI / 180;
}

function range(number){
    return Array(number).keys()
}


function log(...args){
    console.log(...args);
}

function getDistance(point,corner){
    var x = point.x-corner.x;
    var y = point.y-corner.y;
    return Math.sqrt(x*x + y*y )
}

// var frameTimestamp = Date.now();


var bricks=[]
var fallingPowers = [];
var gameOver = false;

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var powerCanvas = document.getElementById('powerCanvas');
var powerctx = powerCanvas.getContext('2d');

function resize(){
   canvas.width = canvas.parentElement.clientWidth;      
   canvas.height = canvas.parentElement.clientHeight;  
   powerCanvas.width = powerCanvas.parentElement.clientWidth;      
   powerCanvas.height = powerCanvas.parentElement.clientHeight;  

}
resize();
