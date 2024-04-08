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

window.onload = function() {
    const s=document.createElement('style');
    s.innerHTML='img{image-rendering:-moz-crisp-edges;}img{image-rendering:pixelated;}';
    document.head.appendChild(s);
    var canvas = document.getElementById('imageCanvas');
    var ctx = canvas.getContext('2d');
    var multiplierInput = document.getElementById("spriteSizer");
    var widthInput = document.getElementById("widthChanger");
    var heightInput = document.getElementById("heightChanger");
        
    widthInput.value = window.screen.width;
    heightInput.value = window.screen.height;
    
    canvas.width = window.screen.width;
    canvas.height = window.screen.height;

    realCanvas.width = window.screen.width;
    realCanvas.height = window.screen.height;
    
    canvas.style.background = "white";
    whenImageLoaded();
};

//Dropped image
$(document).ready(function() {
    var holder = document.getElementById('holder');    
    holder.ondragover = function () { this.className = 'hover'; return false; };
    holder.ondrop = function (e) {
      e.preventDefault();
      var file = e.dataTransfer.files[0];
      var reader = new FileReader();
      reader.onload = function(event){
        img.onload = function(){
            var holderID = document.getElementById("holder");
            holderID.id = ""; //cambia el ID para evitar que se pueda agarrar una imagen de los iconos y soltarla, reseteando el fondo de pantalla que se esté haciendo
            whenImageLoaded();
        }
        img.src = event.target.result;
        changeVisibility("afterSpriteIsLoaded");
    }
      reader.readAsDataURL(file);
    };
});