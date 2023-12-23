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