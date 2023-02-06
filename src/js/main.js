"use strict";

//Menu Burger
const iconMenu = document.querySelector('.menu-btn');
const menuBody = document.querySelector('.menu-mobile');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//Mixitup
var mixer = mixitup('.mixitup__box', {
    load: {
        filter: '.flight'
    }
});