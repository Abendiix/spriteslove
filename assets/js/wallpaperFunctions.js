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

var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);

var canvas = document.getElementById('imageCanvas');
var realCanvas = document.getElementById('realCanvas');

var ctx = canvas.getContext('2d');
var realCtx = realCanvas.getContext('2d');

var img = new Image();

var widthInput = document.getElementById("widthChanger");
var heightInput = document.getElementById("heightChanger");

var patternXCoord = document.getElementById("PatternXCoord");
var patternYCoord = document.getElementById("PatternYCoord");

var spriteMultiplier = document.getElementById("spriteSizer");
var spriteXCoord = document.getElementById("XPosition");;
var spriteYCoord = document.getElementById("YPosition");
var spriteShadow;
var shadowX = 0;
var shadowY = 0;
var spritePatternValue = "0";
var spriteOrientation;

var wallpaperBackgroundColor;
var wallpaperXResolution;
var wallpaperYResolution;
var wallpaperFilter;

var watermarkDesignValue;
var watermarkPositionValue;

function whenImageLoaded() {
    
    var rgb = getAverageRGB(img);
    
    wallpaperBackgroundColor = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';

    var favcolor = document.getElementById('favcolor');
    favcolor.value = RGBToHex(rgb);
        
    spriteMultiplier.value = Math.trunc(Math.min(window.screen.width, window.screen.height) / ((Math.max(img.width, img.height))));

    if(spriteMultiplier.value == 0)
    {
        spriteMultiplier.value = 1;
    }
    
    spriteXCoord.value = ~~(canvas.width / 2 - ((img.width / 2.5) / 2));
    spriteYCoord.value = ~~(canvas.height / 2 - ((img.height / 2.5) / 2));
    
    ctx.shadowColor = "black";
    realCtx.shadowColor = "black";
    
    drawEverything(img, spriteMultiplier, spriteXCoord, spriteYCoord, spriteShadow, spritePatternValue, spriteOrientation, canvas, realCanvas, ctx, realCtx, wallpaperBackgroundColor, watermarkDesignValue, watermarkPositionValue, shadowX, shadowY);
}

function changeSpriteMultiplier()
{
    spriteMultiplier.value = document.getElementById("spriteSizer").value;
    
    if(spriteMultiplier.value <= 0)
        {
            spriteMultiplier.value = 1;
            document.getElementById("spriteSizer").value = 1;
        }
    
    drawEverything(img, spriteMultiplier, spriteXCoord, spriteYCoord, spriteShadow, spritePatternValue, spriteOrientation, canvas, realCanvas, ctx, realCtx, wallpaperBackgroundColor, watermarkDesignValue, watermarkPositionValue, shadowX, shadowY);
}


function backgroundChange() {
    wallpaperBackgroundColor = document.getElementById('favcolor').value;
    ctx.fillStyle = wallpaperBackgroundColor;
    realCtx.fillStyle = wallpaperBackgroundColor;

    drawEverything(img, spriteMultiplier, spriteXCoord, spriteYCoord, spriteShadow, spritePatternValue, spriteOrientation, canvas, realCanvas, ctx, realCtx, wallpaperBackgroundColor, watermarkDesignValue, watermarkPositionValue, shadowX, shadowY);
}

function changeWidth() {
    canvas.width = document.getElementById("widthChanger").value;
    realCanvas.width = document.getElementById("widthChanger").value;
    
    if(document.getElementById("widthChanger").value <= 0)
        {
            canvas.width = 1;
            realCanvas.width = 1;
            document.getElementById("widthChanger").value = 1;
        }
    
    console.log(canvas.offsetWidth + " " + canvas.offsetHeight + " " +canvas.offsetHeight / canvas.offsetWidth);
    
    if(canvas.offsetHeight / canvas.offsetWidth < 0.2 || canvas.offsetHeight / canvas.offsetWidth > 1.2)
        {
            document.getElementById("imageCanvas").style.width = "50%";
            document.getElementById("imageCanvas").style.width = "50%";
        }
    
    resolution();
    
    drawEverything(img, spriteMultiplier, spriteXCoord, spriteYCoord, spriteShadow, spritePatternValue, spriteOrientation, canvas, realCanvas, ctx, realCtx, wallpaperBackgroundColor, watermarkDesignValue, watermarkPositionValue, shadowX, shadowY);
}

function changeHeight() {
    canvas.height = document.getElementById("heightChanger").value;
    realCanvas.height = document.getElementById("heightChanger").value;
    
    if(document.getElementById("heightChanger").value <= 0)
        {
            canvas.height = 1;
            realCanvas.height = 1;
            document.getElementById("heightChanger").value = 1;
        }
    
    resolution();

    drawEverything(img, spriteMultiplier, spriteXCoord, spriteYCoord, spriteShadow, spritePatternValue, spriteOrientation, canvas, realCanvas, ctx, realCtx, wallpaperBackgroundColor, watermarkDesignValue, watermarkPositionValue, shadowX, shadowY);
}

function changeXPosition()
{
    spriteXCoord.value = document.getElementById("XPosition").value;
    
    if(spriteXCoord.value < 0)
        {
            spriteXCoord.value = 1;
            document.getElementById("XPosition").value = 1;
        }

    drawEverything(img, spriteMultiplier, spriteXCoord, spriteYCoord, spriteShadow, spritePatternValue, spriteOrientation, canvas, realCanvas, ctx, realCtx, wallpaperBackgroundColor, watermarkDesignValue, watermarkPositionValue, shadowX, shadowY);
}

function changeYPosition()
{
    spriteYCoord.value = document.getElementById("YPosition").value;
    
    if(spriteYCoord.value < 0)
        {
            spriteYCoord.value = 1;
            document.getElementById("YPosition").value = 1;
        }
    
    drawEverything(img, spriteMultiplier, spriteXCoord, spriteYCoord, spriteShadow, spritePatternValue, spriteOrientation, canvas, realCanvas, ctx, realCtx, wallpaperBackgroundColor, watermarkDesignValue, watermarkPositionValue, shadowX, shadowY);
}

function changeShadow()
{
    spriteShadow = document.getElementById("shadow").value;

    switch (spriteShadow) {
      case "0":
        shadowX = 0;
        shadowY = 0;
        break;
      case "1":
        shadowX = -1;
        shadowY = -1;
        break;
      case "2":
        shadowX = 0;
        shadowY = -1;
        break;
      case "3":
        shadowX = 1;
        shadowY = -1;
        break;
      case "4":
        shadowX = -1;
        shadowY = 0;
        break;
      case "5":
        shadowX = 1;
        shadowY = 0;
        break;
      case "6":
        shadowX = -1;
        shadowY = 1;
        break;
      case "7":
        shadowX = 0;
        shadowY = 1;
        break;
      case "8":
        shadowX = 1;
        shadowY = 1;
        break;
      default:
    }
    
    shadowX = shadowX;
    shadowY = shadowY;
    
    drawEverything(img, spriteMultiplier, spriteXCoord, spriteYCoord, spriteShadow, spritePatternValue, spriteOrientation, canvas, realCanvas, ctx, realCtx, wallpaperBackgroundColor, watermarkDesignValue, watermarkPositionValue, shadowX, shadowY);
}

function changeImagePattern()
{
    spritePatternValue = document.getElementById("imagePattern").value;
    
    drawEverything(img, spriteMultiplier, spriteXCoord, spriteYCoord, spriteShadow, spritePatternValue, spriteOrientation, canvas, realCanvas, ctx, realCtx, wallpaperBackgroundColor, watermarkDesignValue, watermarkPositionValue, shadowX, shadowY);
}

function changeWatermarkDesign()
{
    watermarkDesignValue = document.getElementById("watermarkDesign").value;
    
    drawEverything(img, spriteMultiplier, spriteXCoord, spriteYCoord, spriteShadow, spritePatternValue, spriteOrientation, canvas, realCanvas, ctx, realCtx, wallpaperBackgroundColor, watermarkDesignValue, watermarkPositionValue, shadowX, shadowY);
}

function changeWatermarkPosition()
{
    watermarkPositionValue = document.getElementById("watermarkPosition").value;
    
    drawEverything(img, spriteMultiplier, spriteXCoord, spriteYCoord, spriteShadow, spritePatternValue, spriteOrientation, canvas, realCanvas, ctx, realCtx, wallpaperBackgroundColor, watermarkDesignValue, watermarkPositionValue, shadowX, shadowY);
}