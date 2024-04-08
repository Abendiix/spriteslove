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

var imageCanvasSizeCheck;

function wallpaper() {
    var global = document.getElementById("global");
    var wallpaper = document.getElementById("wallpaper");
    var returnImage = document.getElementById("return");
    var returnUnableImage = document.getElementById("returnunable");

    global.style.display = "none";
    wallpaper.style.display = "block";
    returnImage.style.display = "inline";
    returnUnableImage.style.display = "none";
}

function favcolor()
{
    var favcolor = document.getElementById("favcolor");
    var heightChanger = document.getElementById("heightChanger");
    var widthChanger = document.getElementById("widthChanger");
    
    favcolor.style.display = "block";
    heightChanger.style.display = "none";
    widthChanger.style.display = "none";
}

function filter()
{
    var favcolor = document.getElementById("favcolor");
    var heightChanger = document.getElementById("heightChanger");
    var widthChanger = document.getElementById("widthChanger");
    
    favcolor.style.display = "none";
    heightChanger.style.display = "none";
    widthChanger.style.display = "none";
}

function resolution()
{
    imageCanvasSizeCheck = document.getElementById("imageCanvas");
    
    var favcolor = document.getElementById("favcolor");
    var heightChanger = document.getElementById("heightChanger");
    var widthChanger = document.getElementById("widthChanger");
    
    favcolor.style.display = "none";
    heightChanger.style.display = "block";
    widthChanger.style.display = "block";
    
    heightChanger.style.left = (1-(heightChanger.offsetWidth/imageCanvasSizeCheck.offsetWidth))*50 + "%";

    widthChanger.style.left = (1+(widthChanger.offsetWidth/imageCanvasSizeCheck.offsetWidth))*50 + "%";
}