'use strict'


//menu button
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
});

//text appearence animation
const textrev = gsap.timeline();

textrev.from(".line span", 1, {
    y: 200,
    ease: "power4.out",
    delay: 1,
    skewY: 10,
    stagger: {
        amount: 0.4
    }
});

//main page button location change animation
const exploreLink = document.querySelector('#explore');
const swupElem = document.querySelector('#swup');
const body = document.querySelector('body');


console.log(swupElem);
exploreLink.addEventListener('click', ()=> {
    swupElem.style = "opacity: 0; transition: 500ms;";
    location.href = "about.html";
});