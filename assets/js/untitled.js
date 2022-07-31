/**
 *    Ken Fyrstenberg Nilsen
 *    Abidas Software
*/
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

/**
 * Demonstrates how to download a canvas an image with a single
 * direct click on a link.
 */
function doCanvas() {
    /* draw something */
    ctx.fillStyle = '#f90';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.font = '60px sans-serif';
    ctx.fillText('Code Project', 10, canvas.height / 2 - 15);
    ctx.font = '26px sans-serif';
    ctx.fillText('Click link below to save this as image', 15, canvas.height / 2 + 35);
}

/**
 * This is the function that will take care of image extracting and
 * setting proper filename for the download.
 * IMPORTANT: Call it from within a onclick event.
*/
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

/** 
 * The event handler for the link's onclick event. We give THIS as a
 * parameter (=the link element), ID of the canvas and a filename.
*/
document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'canvas', 'test.png');
}, false);

/**
 * Draw something to canvas
 */
doCanvas();