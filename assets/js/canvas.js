var img;
var borderimg;
var canvas;
var ctx;
var pokemon;
var graph;
var emotion;
var width;
var height;
var size;
var flip = 1;

var palabra;

var background;
var bordersvg;

var ndsrow;
var n3dsrow;
var nswitchrow;
var control;
var controlchange;

var folder;

window.onload = onLoad();

function onLoad()
{
    background = document.querySelector("body");
    bordersvg = document.querySelector("#borderimg");

    ndsrow = document.querySelector("#ndsrow");
    n3dsrow = document.querySelector("#n3dsrow");
    nswitchrow = document.querySelector("#nswitchrow");
    control = document.querySelector("#control");
    controlchange = document.getElementById("controlchange");

    ndsrow.style.display = "none";
    n3dsrow.style.display = "none";
    nswitchrow.style.display = "none";
    control.style.display = "none";
    controladd.style.display = "none";
    controlchange.style.display = "none";
    controlremove.style.display = "none";
    
    folder = "./images/";
}

function fn() {
    
    img = document.getElementById('pokeimg');
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    pokemon = document.getElementById("pokemon").value;
    emotion = document.getElementById("emotion").value;
    
    img.src = palabra;
    
    canvas.width = width*size;
    canvas.height = height*size;
    ctx.imageSmoothingEnabled = false;
    ctx.scale(size*flip, size);

    console.log(img.src)
}

function draw()
{
    base64();
    ctx.drawImage(img, flip*width/2-(img.width/2), height/2-(img.height/2), img.width, img.height);
    
    if(controlremove.style.display == "flex")
        {
            ctx.drawImage(borderimg, flip*width/2-(borderimg.width/2), height/2-(borderimg.height/2), borderimg.width, borderimg.height);
        }
}

function plain_draw()
{
    base64();
    ctx.drawImage(img, flip*width/2-(img.width/2), height/2-(img.height/2), img.width, img.height);
}

function add()
{
    if(graph == "nds")
        {
            ndsrow.style.display = "flex";
            n3dsrow.style.display = "none";
            nswitchrow.style.display = "none";
            control.style.display = "none";
        }
    else if(graph == "n3ds")
        {
            ndsrow.style.display = "none";
            n3dsrow.style.display = "flex";
            nswitchrow.style.display = "none";
            control.style.display = "none";
        }
    else if(graph == "nswitch")
        {
            ndsrow.style.display = "none";
            n3dsrow.style.display = "none";
            nswitchrow.style.display = "flex";
            control.style.display = "none";
        }
}

function remove()
{
    fn();
    ctx.drawImage(img, flip*width/2-(img.width/2), height/2-(img.height/2), img.width, img.height);
    controladd.style.display = "flex";
    controlchange.style.display = "none";
    controlremove.style.display = "none";
}

function plain_wait()
{
    setTimeout(function() {plain_draw();}, 50);
}

function wait()
{
    setTimeout(function() {draw();}, 50);
}

function cargar(carga)
{
    var emotion_check = new Image();
    var emotion_pick = document.getElementById(carga);
    
    emotion_check.src = folder + graph + "/" + pokemon + "_" + carga + ".png";

    emotion_check.onload = () => {
        emotion_pick.style.display = "flex";
    }
    emotion_check.onerror = () => {
        emotion_pick.style.display = "none";
    }
}

function check_emotion()
{    
    for (let i = 1; i <= 19; i++)
    {
        cargar(i);
    }
}

function nds()
{
    n3dsrow.style.display = "none";
    nswitchrow.style.display = "none";
    flip = 1;
    width = 48;
    height = 48;
    size = 4;
    graph = "nds";
    fn();
    check_emotion();
    remove();
}

function n3ds()
{
    ndsrow.style.display = "none";
    nswitchrow.style.display = "none";
    flip = 1;
    width = 64;
    height = 64;
    size = 3;
    graph = "n3ds";
    fn();
    check_emotion();
    remove();
}

function nswitch()
{
    ndsrow.style.display = "none";
    n3dsrow.style.display = "none";
    flip = 1;
    width = 170;
    height = 170;
    size = 1;
    graph = "nswitch";
    fn();
    check_emotion();
    remove();
}

function reselect()
{
    if(graph == "nds")
        {
            nds();
            control.style.display = "flex";
            controladd.style.display = "flex";
            controlchange.style.display = "none";
            controlremove.style.display = "none";
            width = 48;
            height = 48;
        }
    else if(graph == "n3ds")
        {
            n3ds();
            control.style.display = "flex";
            controladd.style.display = "flex";
            controlchange.style.display = "none";
            controlremove.style.display = "none";
            width = 64;
            height = 64;
        }
    else if(graph == "nswitch")
        {
            nswitch();
            control.style.display = "flex";
            controladd.style.display = "flex";
            controlchange.style.display = "none";
            controlremove.style.display = "none";
            width = 170;
            height = 170;
        }
    fn();
    wait();
}

function confirm()
{
    fn();
    wait();
}

function flipped()
{
    flip = flip * -1;
    fn();
    wait();
}

function blue_blue()
{
    borderimg = document.getElementById('blue_blue');
    borderimg.src = "./borders/blue_blue.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    controlremove.style.display = "flex";
    fn();
    draw();
}

function blue_pink()
{
    borderimg = document.getElementById('blue_pink');
    borderimg.src = "./borders/blue_pink.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    controlremove.style.display = "flex";
    fn();
    draw();
}

function blue_green()
{
    borderimg = document.getElementById('blue_green');
    borderimg.src = "./borders/blue_green.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    controlremove.style.display = "flex";
    fn();
    draw();
}

function dt_blue()
{
    borderimg = document.getElementById('dt_blue');
    borderimg.src = "./borders/dt_blue.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    controlremove.style.display = "flex";
    fn();
    draw();
}

function dt_pink()
{
    borderimg = document.getElementById('dt_pink');
    borderimg.src = "./borders/dt_pink.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    controlremove.style.display = "flex";
    fn();
    draw();
}

function dt_green()
{
    borderimg = document.getElementById('dt_green');
    borderimg.src = "./borders/dt_green.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    controlremove.style.display = "flex";
    fn();
    draw();
}

function sky_blue()
{
    borderimg = document.getElementById('sky_blue');
    borderimg.src = "./borders/sky_blue.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    controlremove.style.display = "flex";
    fn();
    draw();
}

function sky_pink()
{
    borderimg = document.getElementById('sky_pink');
    borderimg.src = "./borders/sky_pink.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    controlremove.style.display = "flex";
    fn();
    draw();
}

function sky_green()
{
    borderimg = document.getElementById('sky_green');
    borderimg.src = "./borders/sky_green.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    controlremove.style.display = "flex";
    fn();
    draw();
}

function mega()
{
    borderimg = document.getElementById('mega');
    borderimg.src = "./borders/mega.png";
    n3dsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    controlremove.style.display = "flex";
    fn();
    draw();
}

function gates()
{
    borderimg = document.getElementById('gates');
    borderimg.src = "./borders/gates.png";
    n3dsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    controlremove.style.display = "flex";
    fn();
    draw();
}

function dx()
{
    borderimg = document.getElementById('dx');
    borderimg.src = "./borders/dx.png";
    nswitchrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    controlremove.style.display = "flex";
    fn();
    draw();
}

function base64()
{
function toDataURL(src, callback, outputFormat) {
  let image = new Image();
  image.crossOrigin = 'Anonymous';
  image.onload = function () {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let dataURL;
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  image.src = src;
  if (image.complete || image.complete === undefined) {
    image.src = "data:image/gif;base64, R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    image.src = src;
  }
}

var imagennn = new Image();
imagennn.src = folder + graph + "/" + pokemon + "_" + emotion + ".png";
    
toDataURL(imagennn.src,
  function (dataUrl) {
    palabra = dataUrl
    console.log('RESULT: ' + palabra);
  }
)
}

function download(){
    var image = canvas.toDataURL();  
  
    var tmpLink = document.createElement('a');  
    tmpLink.download = 'image.png';
    tmpLink.href = image;  
  
    document.body.appendChild(tmpLink);  
    tmpLink.click();  
    document.body.removeChild(tmpLink);  
}