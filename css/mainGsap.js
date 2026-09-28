const mainp1 = document.querySelector('.main_visual .main_txt .txt_line');
const mainp2 = document.querySelector('.main_visual .main_txt .p2');
const mainp3 = document.querySelector('.main_visual .main_txt .p3');
const mainp4 = document.querySelector('.main_visual .main_txt .p4');
const span1 = document.querySelector('.main_visual .main_txt .span1');
const span2 = document.querySelector('.main_visual .main_txt .span2');

gsap.from([mainp1, mainp2, mainp3, mainp4, span1, span2], {
  opacity: 0,
  duration: 0.5,
  y: 20,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.main_visual',
    start: 'top center',
    toggleActions: 'restart none restart none',
  }
});

const starP = document.querySelector('.overview .view_left p');

gsap.to(starP, {
  opacity: 1,
  duration: 1.3,
  x: 20,
  scrollTrigger: {
    trigger: '.view_left',
    start: 'top center',
    toggleActions: 'restart none restart none',
  }
});

const viewTitle = document.querySelector('.overview .view_txt .view_title');
const viewPEls = document.querySelectorAll('.overview .view_txt>p');
gsap.to(viewTitle, {
  opacity: 1,
  duration: 0.5,
  delay: 0.3,
  y: 0,
  scrollTrigger: {
    trigger: '.view_left',
    start: 'top center',
    toggleActions: 'restart none restart none',
  }
});

gsap.to(viewPEls, {
  opacity: 1,
  duration: 0.5,
  delay: 0.5,
  y: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.view_left',
    start: 'top center',
    toggleActions: 'restart none restart none',
  }
});


const FtitleP = document.querySelector('.fireworks .title p');
const FtitleDiv = document.querySelector('.fireworks .title div');
const FtitleSpan = document.querySelector('.fireworks .title span');

// gsap.from([FtitleP, FtitleDiv, FtitleSpan], {
//   opacity: 0,
//   duration: 0.5,
//   y: 20,
//   stagger: 0.2,
//   scrollTrigger: {
//     trigger: '.fireworks',
//     start: 'top center',
//     toggleActions: 'restart none restart none',
//   }
// });

gsap.from([FtitleP, FtitleDiv, FtitleSpan], {
  opacity: 0,
  duration: 0.5,
  y: 20,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.fireworks',
    start: 'top center',
    toggleActions: 'restart none restart none',
  }
});

const fireworksEls = document.querySelectorAll('.fireworks .txt>div');

gsap.to(fireworksEls, {
  delay: 0.5,
  opacity: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.fireworks',
    start: 'top center',
    toggleActions: 'restart none restart none',
  }
});


const PtitleP = document.querySelector('.program .title p');
const PtitleDiv = document.querySelector('.program .title div');
const PtitleSpan = document.querySelector('.program .title span');

gsap.from([PtitleP, PtitleDiv, PtitleSpan], {
  opacity: 0,
  duration: 0.5,
  y: 20,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.program',
    start: 'top center',
    toggleActions: 'restart none restart none',
  }
});


const scheduleEls = document.querySelectorAll('.program .schedule>div');

gsap.to(scheduleEls, {
  opacity: 1,
  delay: 0.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.program',
    start: 'top center',
    toggleActions: 'restart none restart none',
  }
});

const GtitleP = document.querySelector('.guide .title p');
const GtitleDiv = document.querySelector('.guide .title div');
const GtitleSpan = document.querySelector('.guide .title span');

gsap.from([GtitleP, GtitleDiv, GtitleSpan], {
  opacity: 0,
  duration: 0.5,
  y: 20,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.guide',
    start: 'top center',
    toggleActions: 'restart none restart none',
  }
});


const tipBoxEls = document.querySelectorAll('.guide .tip_box>div');

gsap.to(tipBoxEls, {
  opacity: 1,
  delay: 0.5,
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.guide',
    start: 'top center',
    toggleActions: 'restart none restart none',
  }
});

const underTitle = document.querySelector('.under .title');

gsap.to(underTitle, {
  backgroundPosition: '100% 50%',
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
});