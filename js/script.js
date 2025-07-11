//Função para mostrar o botão da navbar, verificar lógica se puder
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/img/close_white_36dp.svg";
    }
}

//Ler mais
var button = document.getElementById('ler-mais');

button.addEventListener('click', function () {
    var card = document.querySelector('.nossos-servicos');

    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent = 'Ler menos';
    }

    button.textContent = 'Ler mais';
});
