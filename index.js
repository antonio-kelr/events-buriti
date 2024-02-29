const butao = document.querySelector('.butao');
const contador = document.querySelector('.contador');
const sideBar = document.querySelector('.side-bar');
const formIcon = document.querySelector('.form-icon');

let contadorNumero = 0;

butao.addEventListener('click', function (e) {
    e.preventDefault();

    contadorNumero++;
    contador.textContent = contadorNumero;
});


formIcon.addEventListener('click', function(e) {
    var isMenuOpen = sideBar.classList.contains('abri-menur');
    
    if (isMenuOpen) {
        sideBar.classList.remove('abri-menur');
    } else {
        sideBar.classList.add('abri-menur');
    }

    e.stopPropagation();
});

document.addEventListener('click', function(e) {
    var isClickedOutside = !sideBar.contains(e.target) && !formIcon.contains(e.target);

    if (isClickedOutside) {
        sideBar.classList.remove('abri-menur');
    }
});
sideBar.addEventListener('click', function(e) {
    if (sideBar.classList.contains('abri-menur')) {
        sideBar.classList.remove('abri-menur');
    }
});





$('.radio1').click(function () {
    $('#carouselExampleIndicators').carousel(0);
});
$('.radio2').click(function () {
    $('#carouselExampleIndicators').carousel(1);
});
$('.radio3').click(function () {
    $('#carouselExampleIndicators').carousel(2);
});
$('.radio4').click(function () {
    $('#carouselExampleIndicators').carousel(0);
});

