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