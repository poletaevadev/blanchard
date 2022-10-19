let btns = document.querySelectorAll('.swiper-gallery__slide');
let modalOverlay = document.querySelector('.modals__overlay');
let modals = document.querySelectorAll('.modal');
let modalClose = document.querySelectorAll('.modal__close');
let body = document.body;

let disableScroll = function () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  document.body.style.paddingRight = paddingOffset;
  body.classList.add('disable-scroll');
};

let enableScroll = function () {
  body.classList.remove('disable-scroll');
  body.style.paddingRight = '0px';
};

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    disableScroll();

    modals.forEach((el) => {
      el.classList.remove('modal_visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal_visible');
    modalOverlay.classList.add('modals__overlay_visible');
  });

});

modalOverlay.addEventListener('click', (e) => {

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modals__overlay_visible');
    modals.forEach((el) => {
      el.classList.remove('modal_visible');
    });
  }
});

modalClose.forEach((el) => {
  el.addEventListener('click', (e) => {
    enableScroll();

    modalOverlay.classList.remove('modals__overlay_visible');
    modals.forEach((el) => {
      el.classList.remove('modal_visible');
    });
  });
});


