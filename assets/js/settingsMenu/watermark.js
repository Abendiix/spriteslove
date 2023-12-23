function watermark() {
    var global = document.getElementById("global");
    var watermark = document.getElementById("watermark");
    var returnImage = document.getElementById("return");
    var returnUnableImage = document.getElementById("returnunable");

    global.style.display = "none";
    watermark.style.display = "block";
    returnImage.style.display = "inline";
    returnUnableImage.style.display = "none";
}

function watermarkDesign()
{
    var watermarkDesign = document.getElementById("watermarkDesign");
    var watermarkPosition = document.getElementById("watermarkPosition");
    
    watermarkDesign.style.display = "block";
    watermarkPosition.style.display = "none";
}

function watermarkPosition()
{
    var watermarkDesign = document.getElementById("watermarkDesign");
    var watermarkPosition = document.getElementById("watermarkPosition");
    
    watermarkDesign.style.display = "none";
    watermarkPosition.style.display = "block";
}