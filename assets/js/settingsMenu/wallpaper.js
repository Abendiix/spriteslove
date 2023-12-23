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