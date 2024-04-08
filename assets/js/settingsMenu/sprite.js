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

var imageCanvasSizeCheck = document.getElementById("imageCanvas");

function sprite() {
    var global = document.getElementById("global");
    var sprite = document.getElementById("sprite");
    var returnImage = document.getElementById("return");
    var returnUnableImage = document.getElementById("returnunable");

    global.style.display = "none";
    sprite.style.display = "inline";
    returnImage.style.display = "inline";
    returnUnableImage.style.display = "none";
}

function spriteSizer()
{
var spriteSizer = document.getElementById("spriteSizer");
var XPosition = document.getElementById("XPosition");
var YPosition = document.getElementById("YPosition");
var shadow = document.getElementById("shadow");
var imagePattern = document.getElementById("imagePattern");
    spriteSizer.style.display = "inline";
    XPosition.style.display = "none";
    YPosition.style.display = "none";
    shadow.style.display = "none";
    imagePattern.style.display = "none";
}

function spritePosition()
{
var spriteSizer = document.getElementById("spriteSizer");
var XPosition = document.getElementById("XPosition");
var YPosition = document.getElementById("YPosition");
var shadow = document.getElementById("shadow");
var imagePattern = document.getElementById("imagePattern");
    spriteSizer.style.display = "none";
    XPosition.style.display = "inline";
    YPosition.style.display = "inline";
    
    XPosition.style.left = (1-(XPosition.offsetWidth/imageCanvasSizeCheck.offsetWidth))*50 + "%";

    YPosition.style.left = (1+(YPosition.offsetWidth/imageCanvasSizeCheck.offsetWidth))*50 + "%";
    
    shadow.style.display = "none";
    imagePattern.style.display = "none";
    PatternYCoord.style.display = "none";
}

function spriteShadowFunction()
{
var spriteSizer = document.getElementById("spriteSizer");
var XPosition = document.getElementById("XPosition");
var YPosition = document.getElementById("YPosition");
var shadow = document.getElementById("shadow");
var imagePattern = document.getElementById("imagePattern");
    spriteSizer.style.display = "none";
    XPosition.style.display = "none";
    YPosition.style.display = "none";
    shadow.style.display = "inline";
    imagePattern.style.display = "none";
}

function spritePattern()
{
var spriteSizer = document.getElementById("spriteSizer");
var XPosition = document.getElementById("XPosition");
var YPosition = document.getElementById("YPosition");
var shadow = document.getElementById("shadow");
var imagePattern = document.getElementById("imagePattern");
    spriteSizer.style.display = "none";
    XPosition.style.display = "none";
    YPosition.style.display = "none";
    shadow.style.display = "none";
    imagePattern.style.display = "inline";
}

function spritePatternDeviation()
{
var spriteSizer = document.getElementById("spriteSizer");
var XPosition = document.getElementById("XPosition");
var YPosition = document.getElementById("YPosition");
var shadow = document.getElementById("shadow");
var imagePattern = document.getElementById("imagePattern");
    spriteSizer.style.display = "none";
    XPosition.style.display = "none";
    YPosition.style.display = "none";
    shadow.style.display = "none";
    imagePattern.style.display = "none";
    PatternXCoord.style.display = "inline";
    PatternYCoord.style.display = "inline";
}

function spriteOrientation()
{
var spriteSizer = document.getElementById("spriteSizer");
var XPosition = document.getElementById("XPosition");
var YPosition = document.getElementById("YPosition");
var shadow = document.getElementById("shadow");
var imagePattern = document.getElementById("imagePattern");
    spriteSizer.style.display = "none";
    XPosition.style.display = "none";
    YPosition.style.display = "none";
    shadow.style.display = "none";
    imagePattern.style.display = "none";
}