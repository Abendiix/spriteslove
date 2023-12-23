function drawCanvas(realCanvas, ctx, realCtx, color, shadowX, shadowY)
{
    ctx.fillStyle = color;
    realCtx.fillStyle = color;
    
    ctx.imageSmoothingEnabled = false;
    realCtx.imageSmoothingEnabled = false;
    
    ctx.shadowColor = "black";
    realCtx.shadowColor = "black";
    
    ctx.shadowOffsetX = shadowX*spriteMultiplier.value;
    ctx.shadowOffsetY = shadowY*spriteMultiplier.value;
    realCtx.shadowOffsetX = shadowX*spriteMultiplier.value;
    realCtx.shadowOffsetY = shadowY*spriteMultiplier.value;
    
    ctx.fillRect(0, 0, realCanvas.width, realCanvas.height);
    realCtx.fillRect(0, 0, realCanvas.width, realCanvas.height);
}

function drawWatermark(spriteMultiplier, watermarkDesign, watermarkPosition, realCanvas, ctx, realCtx)
{
    var imagen = new Image();
    
    var coordX = null;
    var coordY = null;
    var width = new Number();
    var height = new Number();
    var ctxShadowOffsetX;
    var ctxShadowOffsetY;  
    var realCtxShadowOffsetX;
    var realCtxShadowOffsetY;
    
    var images = ["original", "square", "short", "long", "big", "heart"];
    
    for(let i = 0; i < images.length; i++)
        {
            imagen.src="assets/img/watermarks/"+images[i]+".svg";
            imagen = new Image();
        }
    
    switch(watermarkDesign) {
        case "0":
            break;
        case "1":
            imagen.src = "assets/img/watermarks/original.svg";
            break;
        case "2":
            imagen.src = "assets/img/watermarks/square.svg";
            break;
        case "3":
            imagen.src = "assets/img/watermarks/short.svg";
            break;
        case "4":
            imagen.src = "assets/img/watermarks/long.svg";
            break;
        case "5":
            imagen.src = "assets/img/watermarks/big.svg";
            break;
        case "6":
            imagen.src = "assets/img/watermarks/heart.svg";
            break;
        default:
    }
    
    var padding;
    
    padding = Math.max(realCanvas.width*0.02, realCanvas.height*0.02);
    
    switch (watermarkPosition) {
      case "0":
        coordX = null;
        coordY = null;
        break;
      case "1":
        coordX = 0+padding;
        coordY = 0+padding;
        break;
      case "2":
        coordX = realCanvas.width/2-imagen.width*spriteMultiplier.value/2;
        coordY = 0+padding;
        break;
      case "3":
        coordX = realCanvas.width-imagen.width*spriteMultiplier.value-padding;
        coordY = 0+padding;
        break;
      case "4":
        coordX = 0+padding;
        coordY = realCanvas.height/2-imagen.height*spriteMultiplier.value/2;
        break;
      case "5":
        coordX = realCanvas.width/2-imagen.width*spriteMultiplier.value/2;
        coordY = realCanvas.height/2-imagen.height*spriteMultiplier.value/2;
        break;
      case "6":
        coordX = realCanvas.width-imagen.width*spriteMultiplier.value-padding;
        coordY = realCanvas.height/2-imagen.height*spriteMultiplier.value/2;
        break;
      case "7":
        coordX = 0+padding;
        coordY = realCanvas.height-imagen.height*spriteMultiplier.value-padding;
        break;
      case "8":
        coordX = realCanvas.width/2-imagen.width*spriteMultiplier.value/2;
        coordY = realCanvas.height-imagen.height*spriteMultiplier.value-padding;
        break;
      case "9":
        coordX = realCanvas.width-imagen.width*spriteMultiplier.value-padding;
        coordY = realCanvas.height-imagen.height*spriteMultiplier.value-padding;
        break;
      default:
    }
    
    width = imagen.width;
    height = imagen.height;
    
    ctxShadowOffsetX = ctx.shadowOffsetX;
    ctxShadowOffsetY = ctx.shadowOffsetY;  
    realCtxShadowOffsetX = realCtx.shadowOffsetX;
    realCtxShadowOffsetX = realCtx.shadowOffsetY;
    
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;  
    realCtx.shadowOffsetX = 0;
    realCtx.shadowOffsetY = 0;
    
    if(coordX != null && coordY != null)
        {
            ctx.drawImage(imagen, coordX, coordY, width*spriteMultiplier.value, height*spriteMultiplier.value);
            
            realCtx.drawImage(imagen, coordX, coordY, width*spriteMultiplier.value, height*spriteMultiplier.value);
        }

    ctx.shadowOffsetX = ctxShadowOffsetX;
    ctx.shadowOffsetY = ctxShadowOffsetY;  
    realCtx.shadowOffsetX = realCtxShadowOffsetX;
    realCtx.shadowOffsetX = realCtxShadowOffsetY;
    
    imagen = null;
}

function drawImage(img, spriteMultiplier, spriteXCoordValue, spriteYCoordValue, realCanvasWidth, realCanvasHeight, ctx, realCtx, spritePattern)
{    
    spriteXCoordValue -= img.width*spriteMultiplier/2;
    spriteYCoordValue -= img.height*spriteMultiplier/2;
        
    switch (spritePattern) {
        case "0":
            ctx.drawImage(
                img,
                spriteXCoordValue,
                spriteYCoordValue,
                spriteMultiplier*img.width,
                spriteMultiplier*img.height);
    
            realCtx.drawImage(
                img,
                spriteXCoordValue,
                spriteYCoordValue,
                spriteMultiplier*img.width,
                spriteMultiplier*img.height);
            break;
        case "1":
            for(let i = 0; i < Math.trunc(realCanvas.width/(img.width*spriteMultiplier)); i++)
                {
                    for(let j = 0; j < Math.trunc(realCanvas.height/(img.height*spriteMultiplier)); j++)
                        {        
                            ctx.drawImage(
                img, Math.trunc(spriteXCoordValue+i*img.width*spriteMultiplier*2-spriteXCoordValue*2), Math.trunc(spriteYCoordValue+j*img.height*spriteMultiplier*2-spriteYCoordValue*2),
                spriteMultiplier*img.width,
                spriteMultiplier*img.height);
                            
                    realCtx.drawImage(
                img, Math.trunc(spriteXCoordValue+i*img.width*spriteMultiplier*2-spriteXCoordValue*2), Math.trunc(spriteYCoordValue+j*img.height*spriteMultiplier*2-spriteYCoordValue*2),
                spriteMultiplier*img.width,
                spriteMultiplier*img.height);
                        }
                }
            break;
        case "2":
            
            for(let i = 0; i < Math.trunc(realCanvas.width/(img.width*spriteMultiplier)); i++)
                {
                    for(let j = 0; j < Math.trunc(realCanvas.height/(img.height*spriteMultiplier)); j++)
                        {
                            if(j%2!=0)
                                {
                                    ctx.drawImage(
                img, Math.trunc(spriteXCoordValue+i*img.width*spriteMultiplier*2-spriteXCoordValue*2), Math.trunc(spriteYCoordValue+j*img.height*spriteMultiplier*2-spriteYCoordValue*2),
                spriteMultiplier*img.width,
                spriteMultiplier*img.height);
                                    
                                    realCtx.drawImage(img, Math.trunc(spriteXCoordValue+i*img.width*spriteMultiplier*2-spriteXCoordValue*2), Math.trunc(spriteYCoordValue+j*img.height*spriteMultiplier*2-spriteYCoordValue*2),
                spriteMultiplier*img.width,
                spriteMultiplier*img.height);
                                }
                            else
                                {
                                    ctx.drawImage(
                img, Math.trunc(spriteXCoordValue+i*img.width*spriteMultiplier*2-spriteXCoordValue*2+img.width*spriteMultiplier), Math.trunc(spriteYCoordValue+j*img.height*spriteMultiplier*2-spriteYCoordValue*2),
                spriteMultiplier*img.width,
                spriteMultiplier*img.height);
                                    
                 realCtx.drawImage(
                img, Math.trunc(spriteXCoordValue+i*img.width*spriteMultiplier*2-spriteXCoordValue*2+img.width*spriteMultiplier), Math.trunc(spriteYCoordValue+j*img.height*spriteMultiplier*2-spriteYCoordValue*2),
                spriteMultiplier*img.width,
                spriteMultiplier*img.height);   
                                }
                        }
                }
            break;
        default:
    }
}

function drawEverything(img, spriteMultiplier, spriteXCoord, spriteYCoord, spriteShadow, spritePattern, spriteOrientation, canvas, realCanvas, ctx, realCtx, color, watermarkDesign, watermarkPosition, shadowX, shadowY){    
    drawCanvas(realCanvas, ctx, realCtx, color, shadowX, shadowY);

    drawImage(img, spriteMultiplier.value, spriteXCoord.value, spriteYCoord.value, realCanvas.width, realCanvas.height, ctx, realCtx, spritePattern);
        
    drawWatermark(spriteMultiplier, watermarkDesign, watermarkPosition, realCanvas, ctx, realCtx);
}