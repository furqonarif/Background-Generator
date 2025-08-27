var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");
var hex1 = document.getElementById("hex1");
var hex2 = document.getElementById("hex2");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	hex1.textContent = color1.value.toUpperCase();
	hex2.textContent = color2.value.toUpperCase();

	randomBtn.style.background = 
	"linear-gradient(310deg, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}

// Fungsi bikin warna acak hex
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Event listener
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", function(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
});

// Set gradient saat pertama kali load
setGradient();