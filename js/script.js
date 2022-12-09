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

//all projects button link
const projLink = document.querySelector('.description__explore');


projLink.addEventListener('click', ()=> {
    location.href = "work.html";
});

const servicesLink = document.querySelector('.description__explore_survices');


servicesLink.addEventListener('click', ()=> {
    location.href = "services.html";
});