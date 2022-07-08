"use strict"

let head = document.querySelector('.head');
let headHight = head.offsetHeight;

//Фиксация и анимация меню
document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headHight) {
        head.classList.add('head__fixed');
        document.body.style.paddingTop = headHight + 'px';
    } else {
        head.classList.remove('head__fixed');
        document.body.removeAttribute('style');
    }
};

//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('body_lock');
        iconMenu.classList.toggle('menu__icon_active');
        menuBody.classList.toggle('menu__body_active');
    })
}

//ФУНКЦИЯ ЗАКРЫТИЯ МЕНЮ ПОСЛЕ КЛИКА ПО ССЫЛКЕ ДЛЯ ДЕКСТОПОВ И МОБИЛЬНЫХ
const menuLinks = document.querySelectorAll('.menu__link');

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

//Подключение Яндекс-карты
let center = [53.43695695208052,28.543546389549256];

function init() {
    let map = new ymaps.Map("map", {
        center: center,
        zoom: 16
    });

    let placemark = new ymaps.Placemark(center, {}, {});

    map.geoObjects.add(placemark);
}

ymaps.ready(init);