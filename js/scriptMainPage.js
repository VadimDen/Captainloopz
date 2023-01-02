'use strict'

const exploreLink = document.querySelector('#explore');
const swupElem = document.querySelector('#swup');
const body = document.querySelector('body');

exploreLink.addEventListener('click', () => {
    swupElem.style = "opacity: 0; transition: 500ms;";
    location.href = "about.html";
});