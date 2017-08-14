var colors = ["green", "black", "orange", "white", "gray", "blue", "lime", "Aquamarine", "aqua", "FloralWhite"];

var color1;
var color2;
var color_count = -1;
var hex_color = ""

const mq = window.matchMedia( "(max-width: 767px)" );

function toggleOnOff(id_name) {
    var obj = document.getElementById(id_name);
    if (obj.style.display === 'none') {
        obj.style.display = 'block';
    } else {
        obj.style.display = 'none';
    }
} 

function addYourColor()
{
    var obj = document.getElementById("hex_color");
    var nameValue = obj.value;
    document.getElementById("color_box").style.background = "#"+nameValue;
    obj.value = "";
}

function onBrowserLoad() {
    setBoxColor();
    document.getElementById("big_container").style.display = 'none';
}

function setBoxColor ()
{   
    var random_int1 = Math.floor(Math.random() * 10);
    var random_int2 = Math.floor(Math.random() * 10);
    if (random_int1 == random_int2) {
	setBoxColor();
    }
    else
    {
	color1 =  colors[random_int1];
	color2 =  colors[random_int2];
	document.getElementById("right_box").style.background = color1;
	document.getElementById("right_box").style.color = color2;
	color_count += 1;
    }
}

// Functions hide and reveal colors
/*
function revealColor()
{
    document.getElementById("reveal1").innerHTML = color1;
    document.getElementById("reveal2").innerHTML = color2;
}

function hideColor()
{
    document.getElementById("reveal1").innerHTML = "";
    document.getElementById("reveal2").innerHTML = "";  
}
*/

// Better way to hide and reveal colors
function displayColor(id_name1, id_name2, dcolor1, dcolor2)
{
    document.getElementById(id_name1).innerHTML = dcolor1;
    document.getElementById(id_name2).innerHTML = dcolor2;
}

// Below is a function to display date

/* 
function date(id_name)
{
   return document.getElementById(id_name).innerHTML = Date();
}
*/

// Better way to display things
function display (id_name, item)
{
    return document.getElementById(id_name).innerHTML = item;
}

function reset_count()
{
    color_count = 0;
}

function date()
{
    var timestamp = new Date(); 
    if (mq.matches) {
	return timestamp.toUTCString();
    }
    else
    {
	return timestamp;
    }
}
