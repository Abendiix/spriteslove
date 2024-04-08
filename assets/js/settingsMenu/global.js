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

function global() {
    var global = document.getElementById("global");
    var sprite = document.getElementById("sprite");
    var wallpaper = document.getElementById("wallpaper");
    var watermark = document.getElementById("watermark");
    var returnImage = document.getElementById("return");
    var returnUnableImage = document.getElementById("returnunable"); 
    
    var spriteSizer = document.getElementById("spriteSizer");
    var XPosition = document.getElementById("XPosition");
    var YPosition = document.getElementById("YPosition");
    var shadow = document.getElementById("shadow");
    var imagePattern = document.getElementById("imagePattern");
    
    var favcolor = document.getElementById("favcolor");
    var heightChanger = document.getElementById("heightChanger");
    var widthChanger = document.getElementById("widthChanger");
    var defaultSize = document.getElementById("default");
    
    var watermarkDesign = document.getElementById("watermarkDesign");
    var watermarkPosition = document.getElementById("watermarkPosition");
    
    global.style.display = "block";
    sprite.style.display = "none";
    wallpaper.style.display = "none";
    watermark.style.display = "none";
    returnImage.style.display = "none";
    returnUnableImage.style.display = "inline";
    
    spriteSizer.style.display = "none";
    XPosition.style.display = "none";
    YPosition.style.display = "none";
    shadow.style.display = "none";
    imagePattern.style.display = "none";
    
    favcolor.style.display = "none";
    heightChanger.style.display = "none";
    widthChanger.style.display = "none";
    defaultSize.style.display = "none";
    
    watermarkDesign.style.display = "none";
    watermarkPosition.style.display = "none";
} 