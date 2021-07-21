var btn1 = document.getElementById("primera-mision");

btn1.onclick = function selectMission() {
	var m1 = document.getElementById("tepeu-1");
	var m2 = document.getElementById("tepeu-2");
	var m3 = document.getElementById("tepeu-3");
	
	m2.classList.add("invisible");
	m2.classList.remove("mostrar");
	m2.classList.remove("d-flex");
	m1.classList.add("mostrar");
	m1.classList.remove("invisible");
	m1.classList.add("d-flex");
	m3.classList.add("invisible");
	m3.classList.remove("mostrar");
	m3.classList.remove("d-flex");
}

var btn2 = document.getElementById("mision-intermedia");

btn2.onclick = function selectMission() {
	var m1 = document.getElementById("tepeu-1");
	var m2 = document.getElementById("tepeu-2");
	var m3 = document.getElementById("tepeu-3");
	
	m1.classList.add("invisible");
	m1.classList.remove("mostrar");
	m1.classList.remove("d-flex");
	m2.classList.add("mostrar");
	m2.classList.remove("invisible");
	m2.classList.add("d-flex");
	m3.classList.add("invisible");
	m3.classList.remove("mostrar");
	m3.classList.remove("d-flex");
}

var btn3 = document.getElementById("ultima-mision");

btn3.onclick = function selectMission() {
	var m1 = document.getElementById("tepeu-1");
	var m2 = document.getElementById("tepeu-2");
	var m3 = document.getElementById("tepeu-3");
	
	m1.classList.add("invisible");
	m1.classList.remove("mostrar");
	m1.classList.remove("d-flex");
	m3.classList.add("mostrar");
	m3.classList.remove("invisible");
	m3.classList.add("d-flex");
	m2.classList.add("invisible");
	m2.classList.remove("mostrar");
	m2.classList.remove("d-flex");
}