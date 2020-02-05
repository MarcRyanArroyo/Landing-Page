let parralax = () => {
  window.addEventListener('scroll', () => {
    const mainImg = document.querySelector('.main-image');
    const mobileImg = document.querySelector('.mobile-image');
    const bgCircle1 = document.querySelector('#bgCircle1');
    const pic11 = document.querySelector('#pic11');
    const pic21 = document.querySelector('#pic21');
    const bgCircle2 = document.querySelector('#bgCircle2');
    const pic12 = document.querySelector('#pic12');
    const pic22 = document.querySelector('#pic22');
    const bgCircle3 = document.querySelector('#bgCircle3');

    var scrolled = window.pageYOffset;
    //first article
    var mainSpd = scrolled * 0.5;
    var mobSpd = scrolled * -0.5;

    mainImg.style.transform = 'translate3d(0px,' + mainSpd + 'px ,0px)';
    mobileImg.style.transform = 'translate3d(0px,' + mobSpd + 'px,0px)';

    //second article
    var bgSpd = scrolled * -1.5;
    var pic1Spd = scrolled * -0.8;
    var pic2Spd = scrolled * -0.3;
    bgCircle1.style.transform = 'translate3d(0px,' + bgSpd + 'px ,0px)';
    pic11.style.transform = 'translate3d(0px,' + pic1Spd + 'px ,0px)';
    pic21.style.transform = 'translate3d(0px,' + pic2Spd + 'px ,0px)';
    //third article
    bgCircle2.style.transform = 'translate3d(0px,' + bgSpd + 'px ,0px)';
    pic12.style.transform = 'translate3d(0px,' + pic2Spd + 'px ,0px)';
    pic22.style.transform = 'translate3d(0px,' + pic1Spd + 'px ,0px)';
    //be you article
    bgCircle3.style.transform = 'translate3d(0px,' + bgSpd + 'px ,0px)';
  });
};

let checkWidth = () => {
  if (window.matchMedia('(min-width: 770px)').matches) {
    parralax();
  }
};

window.onload = () => checkWidth();
window.onresize = () => setTimeout(location.reload(), 500);
