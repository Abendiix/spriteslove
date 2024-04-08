/*
MIT License

Copyright (c) 2024 Abendiix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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