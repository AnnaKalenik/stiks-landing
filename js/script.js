/*
* ФИКСАЦИЯ И АНИМАЦИЯ МЕНЮ
*/
document.onscroll = function () {
    const head = document.querySelector('.head');
    const headHight = head.offsetHeight;
    const scroll = window.scrollY;

    if (scroll > headHight) {
        head.classList.add('head__fixed');
        document.body.style.paddingTop = headHight + 'px';
    } else {
        head.classList.remove('head__fixed');
        document.body.removeAttribute('style');
    }
};

/*
* МЕНЮ-БУРГЕР
*/
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');

//Открытие меню при нажатии на иконку
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('body_lock');
        iconMenu.classList.toggle('menu__icon_active');
        menuBody.classList.toggle('menu__body_active');
    })
}

//Функция закрытия меню-бургер после клика по пункту меню
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        if (iconMenu.classList.contains('menu__icon_active')) {
            document.body.classList.remove('body_lock');
            iconMenu.classList.remove('menu__icon_active');
            menuBody.classList.remove('menu__body_active');
        }
    }
}

/*
* ПОДКЛЮЧЕНИЕ ЯНДЕКС-КАРТ
*/
function initMap() {
    const center = [53.43695695208052,28.543546389549256];

    const map = new ymaps.Map("map", {
        center: center,
        zoom: 16
    });

    const placemark = new ymaps.Placemark(center, {}, {});

    map.geoObjects.add(placemark);
}

ymaps.ready(initMap);