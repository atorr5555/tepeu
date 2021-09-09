var btn_emidss1 = document.getElementById("emidss-1btn")
var btn_emidss2 = document.getElementById("emidss-2btn")
var btn_csm2016 = document.getElementById("csm2016btn")
var btn_csm2018 = document.getElementById("csm2018btn")
var btn_pegasus1 = document.getElementById("pegasus1btn")
var btn_pegasus2 = document.getElementById("pegasus2btn")
var btn_pegasus3 = document.getElementById("pegasus3btn")
var btn_pegasus4 = document.getElementById("pegasus4btn")

var emidss1 = document.getElementById("emidss-1")
var emidss2 = document.getElementById("emidss-2")
var csm2016 = document.getElementById("csm2016")
var csm2018 = document.getElementById("csm2018")
var pegasus1 = document.getElementById("pegasus1")
var pegasus2 = document.getElementById("pegasus2")
var pegasus3 = document.getElementById("pegasus3")
var pegasus4 = document.getElementById("pegasus4")

var emidss1lb = document.getElementById("emidss-1lb")
var emidss2lb = document.getElementById("emidss-2lb")
var csm2016lb = document.getElementById("csm2016lb")
var csm2018lb = document.getElementById("csm2018lb")
var pegasus1lb = document.getElementById("pegasus1lb")
var pegasus2lb = document.getElementById("pegasus2lb")
var pegasus3lb = document.getElementById("pegasus3lb")
var pegasus4lb = document.getElementById("pegasus4lb")

btn_emidss1.onclick = function() {
	esconde(emidss2)
	muestra(emidss1)
	esconde(csm2016)
	esconde(csm2018)
	esconde(pegasus1)
	esconde(pegasus2)
	esconde(pegasus3)
	esconde(pegasus4)

	activa(emidss1lb)
	desactiva(emidss2lb)
	desactiva(csm2016lb)
	desactiva(csm2018lb)
	desactiva(pegasus1lb)
	desactiva(pegasus2lb)
	desactiva(pegasus3lb)
	desactiva(pegasus4lb)
}

btn_emidss2.onclick = function() {
	esconde(emidss1)
	muestra(emidss2)
	esconde(csm2016)
	esconde(csm2018)
	esconde(pegasus1)
	esconde(pegasus2)
	esconde(pegasus3)
	esconde(pegasus4)

	activa(emidss2lb)
	desactiva(emidss1lb)
	desactiva(csm2016lb)
	desactiva(csm2018lb)
	desactiva(pegasus1lb)
	desactiva(pegasus2lb)
	desactiva(pegasus3lb)
	desactiva(pegasus4lb)
}

btn_csm2016.onclick = function() {
	esconde(emidss1)
	esconde(emidss2)
	muestra(csm2016)
	esconde(csm2018)
	esconde(pegasus1)
	esconde(pegasus2)
	esconde(pegasus3)
	esconde(pegasus4)

	desactiva(emidss2lb)
	desactiva(emidss1lb)
	activa(csm2016lb)
	desactiva(csm2018lb)
	desactiva(pegasus1lb)
	desactiva(pegasus2lb)
	desactiva(pegasus3lb)
	desactiva(pegasus4lb)
}

btn_csm2018.onclick = function() {
	esconde(emidss1)
	esconde(emidss2)
	esconde(csm2016)
	muestra(csm2018)
	esconde(pegasus1)
	esconde(pegasus2)
	esconde(pegasus3)
	esconde(pegasus4)

	desactiva(emidss2lb)
	desactiva(emidss1lb)
	desactiva(csm2016lb)
	activa(csm2018lb)
	desactiva(pegasus1lb)
	desactiva(pegasus2lb)
	desactiva(pegasus3lb)
	desactiva(pegasus4lb)
}

btn_pegasus1.onclick = function() {
	esconde(emidss1)
	esconde(emidss2)
	esconde(csm2016)
	esconde(csm2018)
	muestra(pegasus1)
	esconde(pegasus2)
	esconde(pegasus3)
	esconde(pegasus4)

	desactiva(emidss2lb)
	desactiva(emidss1lb)
	desactiva(csm2016lb)
	desactiva(csm2018lb)
	activa(pegasus1lb)
	desactiva(pegasus2lb)
	desactiva(pegasus3lb)
	desactiva(pegasus4lb)
}

btn_pegasus2.onclick = function() {
	esconde(emidss1)
	esconde(emidss2)
	esconde(csm2016)
	esconde(csm2018)
	esconde(pegasus1)
	muestra(pegasus2)
	esconde(pegasus3)
	esconde(pegasus4)

	desactiva(emidss2lb)
	desactiva(emidss1lb)
	desactiva(csm2016lb)
	desactiva(csm2018lb)
	desactiva(pegasus1lb)
	activa(pegasus2lb)
	desactiva(pegasus3lb)
	desactiva(pegasus4lb)
}

btn_pegasus3.onclick = function() {
	esconde(emidss1)
	esconde(emidss2)
	esconde(csm2016)
	esconde(csm2018)
	esconde(pegasus1)
	esconde(pegasus2)
	muestra(pegasus3)
	esconde(pegasus4)

	desactiva(emidss2lb)
	desactiva(emidss1lb)
	desactiva(csm2016lb)
	desactiva(csm2018lb)
	desactiva(pegasus1lb)
	desactiva(pegasus2lb)
	activa(pegasus3lb)
	desactiva(pegasus4lb)
}

btn_pegasus4.onclick = function() {
	esconde(emidss1)
	esconde(emidss2)
	esconde(csm2016)
	esconde(csm2018)
	esconde(pegasus1)
	esconde(pegasus2)
	esconde(pegasus3)
	muestra(pegasus4)

	desactiva(emidss2lb)
	desactiva(emidss1lb)
	desactiva(csm2016lb)
	desactiva(csm2018lb)
	desactiva(pegasus1lb)
	desactiva(pegasus2lb)
	desactiva(pegasus3lb)
	activa(pegasus4lb)
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