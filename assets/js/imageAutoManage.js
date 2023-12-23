function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        img.onload = function () {
            whenImageLoaded();
        }
        img.src = event.target.result;
        changeVisibility("afterSpriteIsLoaded");
    }
    reader.readAsDataURL(e.target.files[0]);
}

function getAverageRGB(imgEl) {
    
    var blockSize = 1,
        defaultRGB = {r:225, g:225, b:225},
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:225, g:225, b:225},
        count = 0;
            
    if (!context) {
        return defaultRGB;
    }
    
    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    
    context.drawImage(imgEl, 0, 0);
    
    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        return defaultRGB;
    }
    
    length = data.data.length;
    
    while ( (i += blockSize * 4) < length) {
        
        if(data.data[i] > 0)
            {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
            }
    }
    
    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);
    
    return rgb;   
}

<!--https://qawithexperts.com/article/javascript/rgb-to-hex-and-hex-to-rgb-using-javascript/405#:~:text=Converting%20RGB%20into%20Hex%20using%20Javascript%20is%20very,hex%20values%2C%20as%20shown%20below%20in%20JS%20function. -->

function RGBToHex(rgb) {
    var r = rgb.r;
    var g = rgb.g;
    var b = rgb.b;
    r = parseInt(r).toString(16);
    g = parseInt(g).toString(16);
    b = parseInt(b).toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}

function downloadCanvas() {
    var image = realCanvas.toDataURL();

    var tmpLink = document.createElement('a');
    
    var date = new Date();
    var dd = date.toJSON().slice(8,10);
    var mm = date.toJSON().slice(5,7);
    var yyyy = date.toJSON().slice(0,4);
    var hour = date.toJSON().slice(11,13);
    var minute = date.toJSON().slice(14,16);
    var sec = date.toJSON().slice(17,19);
    
    tmpLink.download = 'spriteslove_' + dd + "_" + mm + "_" + yyyy + "_" + hour + "_" + minute + "_" + sec;
    tmpLink.href = image;

    document.body.appendChild(tmpLink);
    tmpLink.click();
    document.body.removeChild(tmpLink);
}