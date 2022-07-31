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

var background;
var bordersvg;

var ndsrow;
var n3dsrow;
var nswitchrow;
var control;
var controlchange;

var folder;
var button = document.getElementById("download");

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
    
    folder = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/images/";
}

function fn() {
    
    img = document.getElementById('pokeimg');
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    pokemon = document.getElementById("pokemon").value;
    emotion = document.getElementById("emotion").value;
    
    img.src = folder + graph + "/" + pokemon + "_" + emotion + ".png";
    
    canvas.width = width*size;
    canvas.height = height*size;
    ctx.imageSmoothingEnabled = false;
    ctx.scale(size*flip, size);

    console.log(img.src)
    predown();
}

function draw()
{
    ctx.drawImage(img, flip*width/2-(img.width/2), height/2-(img.height/2), img.width, img.height);
    ctx.drawImage(borderimg, flip*width/2-(borderimg.width/2), height/2-(borderimg.height/2), borderimg.width, borderimg.height);
    predown();
}

function plain_draw()
{
    ctx.drawImage(img, flip*width/2-(img.width/2), height/2-(img.height/2), img.width, img.height);
    predown();
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
        predown();
}

function plain_wait()
{
    setTimeout(function() {plain_draw();predown();}, 50);
}

function wait()
{
    setTimeout(function() {draw();predown();}, 50);
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
    wait();
    predown();
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
    wait();
    predown();
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
    wait();
    predown();
}

function reselect()
{
    if(graph == "nds")
        {
            nds();
            control.style.display = "flex";
            controladd.style.display = "flex";
            controlchange.style.display = "none";
            width = 48;
            height = 48;
        }
    else if(graph == "n3ds")
        {
            n3ds();
            control.style.display = "flex";
            controladd.style.display = "flex";
            controlchange.style.display = "none";
            width = 64;
            height = 64;
        }
    else if(graph == "nswitch")
        {
            nswitch();
            control.style.display = "flex";
            controladd.style.display = "flex";
            controlchange.style.display = "none";
            width = 170;
            height = 170;
        }
    fn();
    predown();
}

function flipped()
{
    flip = flip * -1;
    fn();
    wait();
    predown();
}

function predown()
{
    var image = canvas.toDataURL();  
    image.crossOrigin = "anonymous";  // This enables CORS
    var tmpLink = document.createElement('a');  
    tmpLink.download = 'image.png';
    button.href = canvas.toDataURL();
}

function blue_blue()
{
    borderimg = document.getElementById('blue_blue');
    borderimg.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/borders/blue_blue.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    fn();
    draw();
    predown();
}

function blue_pink()
{
    borderimg = document.getElementById('blue_pink');
    borderimg.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/borders/blue_pink.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    fn();
    draw();
    predown();
}

function blue_green()
{
    borderimg = document.getElementById('blue_green');
    borderimg.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/borders/blue_green.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    fn();
    draw();
    predown();
}

function dt_blue()
{
    borderimg = document.getElementById('dt_blue');
    borderimg.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/borders/dt_blue.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    fn();
    draw();
    predown();
}

function dt_pink()
{
    borderimg = document.getElementById('dt_pink');
    borderimg.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/borders/dt_pink.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    fn();
    draw();
    predown();
}

function dt_green()
{
    borderimg = document.getElementById('dt_green');
    borderimg.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/borders/dt_green.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    fn();
    draw();
    predown();
}

function sky_blue()
{
    borderimg = document.getElementById('sky_blue');
    borderimg.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/borders/sky_blue.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    fn();
    draw();
    predown();
}

function sky_pink()
{
    borderimg = document.getElementById('sky_pink');
    borderimg.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/borders/sky_pink.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    fn();
    draw();
    predown();
}

function sky_green()
{
    borderimg = document.getElementById('sky_green');
    borderimg.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/borders/sky_green.png";
    ndsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    fn();
    draw();
    predown();
}

function mega()
{
    borderimg = document.getElementById('mega');
    borderimg.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/borders/mega.png";
    n3dsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    fn();
    draw();
    predown();
}

function gates()
{
    borderimg = document.getElementById('gates');
    borderimg.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/borders/gates.png";
    n3dsrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    fn();
    draw();
    predown();
}

function dx()
{
    borderimg = document.getElementById('dx');
    borderimg.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/borders/dx.png";
    nswitchrow.style.display = "none";
    control.style.display = "flex";
    controladd.style.display = "none";
    controlchange.style.display = "flex";
    fn();
    draw();
    predown();
}

var canvas = document.getElementById("canvas").getContext("2d");

var button = document.getElementById("download");

var image = new Image();
image.crossOrigin = "anonymous";  // This enables CORS
image.onload = function (event) {
    fn();
        button.download = pokemon + "_" + emotion + ".png";
        button.href = canvas.toDataURL();        
};
image.src = "https://raw.githubusercontent.com/Abendiix/spriteslove/main/assets/img/images/nds/1_1.png";
