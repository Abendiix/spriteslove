let isDragging = false;
const dragInCanvas = document.getElementById("imageCanvas");

dragInCanvas.addEventListener("pointerdown", (e) => {
  isDragging = true;
});

dragInCanvas.addEventListener("pointermove", (e) => {
  if (isDragging) {
    document.getElementById("XPosition").value = Math.trunc(e.offsetX*(dragInCanvas.width/dragInCanvas.offsetWidth));
    document.getElementById("YPosition").value = Math.trunc(e.offsetY*(dragInCanvas.height/dragInCanvas.offsetHeight));
      
    changeXPosition();
    changeYPosition();

  }
});

window.addEventListener("pointerup", (e) => {
  if (isDragging) {
    isDragging = false;
  }
});