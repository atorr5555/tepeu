var tepeu1 = document.getElementById("primera-mision");
var tepeu2 = document.getElementById("mision-intermedia");
var tepeu3 = document.getElementById("ultima-mision");

tepeu1.onclick = function (tepeu1) {
    document.getElementsByClassName('activa')[0].classList.toggle('activa');
    this.classList.add('activa');
    this.classList.remove('inactiva');
};
tepeu2.onclick = function (tepeu2) {
    document.getElementsByClassName('activa')[0].classList.toggle('activa');
    this.classList.add('activa');
    this.classList.remove('inactiva');
};
tepeu3.onclick = function (tepeu3) {
    document.getElementsByClassName('activa')[0].classList.toggle('activa');
    this.classList.add('activa');
    this.classList.remove('inactiva');
};