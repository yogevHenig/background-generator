var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function(){

	console.log("here");

	var newColor1 = 
	'#'+(0x1000000+(Math.random())*0xffffff)
	.toString(16).substr(1,6);

	var newColor2 = 
	'#'+(0x1000000+(Math.random())*0xffffff)
	.toString(16).substr(1,6);

	color1.value = newColor1;
	color2.value = newColor2;

	setGradient();

});