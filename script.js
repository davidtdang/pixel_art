var canvas = document.getElementsByTagName("canvas")[0];
var context2D = canvas.getContext("2d");
var pixelLand = [];


function printPixel (x,y, size) {
  context2D.strokeRect(x, y, size, size);
}


function initializeGrid(height, width, pixSize) {
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      printPixel(x*pixSize,y*pixSize, pixSize);


    };
  };
}


initializeGrid(20, 20, 20)
