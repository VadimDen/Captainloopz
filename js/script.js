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

// header position detector 
const EPSILON = 2;

function setOverflow () {
  var firstDiv = document.querySelector('.header_small');
  var rect = firstDiv.getBoundingClientRect();
  if (Math.abs(rect.top) > 1) {
    firstDiv.style.background = 'none';
    console.log('bigger');
  }
  else {
    firstDiv.style = 'background: rgb(218, 236, 237); transition: all 0.2s;';
    console.log('smaller');
  }
}

function maybeSetOverflow () {
  if (!setOverflow.isBusy) {
    setOverflow.isBusy = true;
    window.requestAnimationFrame(() => {setOverflow.isBusy = false; setOverflow()});
  }
}

window.addEventListener('scroll', maybeSetOverflow);
window.addEventListener('resize', maybeSetOverflow);
window.addEventListener('load'  , maybeSetOverflow);