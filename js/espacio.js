var btn1 = document.getElementById("primera-mision");
var btn2 = document.getElementById("mision-intermedia");
var btn3 = document.getElementById("ultima-mision");
var m1 = document.getElementById("tepeu-1");
var m2 = document.getElementById("tepeu-2");
var m3 = document.getElementById("tepeu-3");

btn1.onclick = function selectMission() {
	esconde(m3);
	esconde(m2);
	muestra(m1);

	activa(btn1);
	inactiva(btn2);
	inactiva(btn3);
}

btn2.onclick = function selectMission() {
	esconde(m1);
	esconde(m3);
	muestra(m2);

	activa(btn2);
	inactiva(btn1);
	inactiva(btn3);
}

btn3.onclick = function selectMission() {
	esconde(m1);
	esconde(m2);
	muestra(m3);

	activa(btn3);
	inactiva(btn2);
	inactiva(btn1);
}

function esconde(elem) {
	elem.classList.add("invisible");
	elem.classList.remove("mostrar");
	elem.classList.remove("d-flex");
}

function muestra(elem) {
	elem.classList.add("mostrar");
	elem.classList.remove("invisible");
	elem.classList.add("d-flex");
}

function activa(elem) {
	elem.classList.add("activa");
	elem.classList.remove("inactiva");
}

function inactiva(elem) {
	elem.classList.add("inactiva");
	elem.classList.remove("activa");
}