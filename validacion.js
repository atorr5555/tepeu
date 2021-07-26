var btn_emidss1 = document.getElementById("emidss-1btn")
var btn_emidss2 = document.getElementById("emidss-2btn")

var emidss1 = document.getElementById("emidss-1")
var emidss2 = document.getElementById("emidss-2")

var emidss1lb = document.getElementById("emidss-1lb")
var emidss2lb = document.getElementById("emidss-2lb")

btn_emidss1.onclick = function() {
	esconde(emidss2)
	muestra(emidss1)

	activa(emidss1lb)
	desactiva(emidss2lb)
}

btn_emidss2.onclick = function() {
	esconde(emidss1)
	muestra(emidss2)

	activa(emidss2lb)
	desactiva(emidss1lb)
}

function esconde(elem) {
	elem.classList.add("invisible");
}

function muestra(elem) {
	elem.classList.remove("invisible");
}

function activa(elem) {
	elem.classList.add("active")
}

function desactiva(elem) {
	elem.classList.remove("active")
}