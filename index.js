const butao = document.querySelector('.butao');
const contador = document.querySelector('.contador');
let contadorNumero = 0; 

butao.addEventListener('click', function (e) {
    e.preventDefault();

    contadorNumero++;
    contador.textContent = contadorNumero;
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

