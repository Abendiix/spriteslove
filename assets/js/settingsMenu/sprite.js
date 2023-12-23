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