var btn_emidss1 = document.getElementById("emidss-1btn")
var btn_emidss2 = document.getElementById("emidss-2btn")
var btn_csm2016 = document.getElementById("csm2016btn")
var btn_csm2018 = document.getElementById("csm2018btn")

var emidss1 = document.getElementById("emidss-1")
var emidss2 = document.getElementById("emidss-2")
var csm2016 = document.getElementById("csm2016")
var csm2018 = document.getElementById("csm2018")

var emidss1lb = document.getElementById("emidss-1lb")
var emidss2lb = document.getElementById("emidss-2lb")
var csm2016lb = document.getElementById("csm2016lb")
var csm2018lb = document.getElementById("csm2018lb")

btn_emidss1.onclick = function() {
	esconde(emidss2)
	muestra(emidss1)
	esconde(csm2016)
	esconde(csm2018)

	activa(emidss1lb)
	desactiva(emidss2lb)
	desactiva(csm2016lb)
	desactiva(csm2018lb)
}

btn_emidss2.onclick = function() {
	esconde(emidss1)
	muestra(emidss2)
	esconde(csm2016)
	esconde(csm2018)

	activa(emidss2lb)
	desactiva(emidss1lb)
	desactiva(csm2016lb)
	desactiva(csm2018lb)
}

btn_csm2016.onclick = function() {
	esconde(emidss1)
	esconde(emidss2)
	muestra(csm2016)
	esconde(csm2018)

	desactiva(emidss2lb)
	desactiva(emidss1lb)
	activa(csm2016lb)
	desactiva(csm2018lb)
}

btn_csm2018.onclick = function() {
	esconde(emidss1)
	esconde(emidss2)
	esconde(csm2016)
	muestra(csm2018)

	desactiva(emidss2lb)
	desactiva(emidss1lb)
	desactiva(csm2016lb)
	activa(csm2018lb)
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