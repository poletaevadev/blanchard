document.querySelectorAll('.header__item-second-btn').forEach(dropdownActive => {
  dropdownActive.addEventListener('click', function () {
    let dropdownBtns = this;
    let drops = dropdownBtns.parentElement.querySelector('.submenu');
    document.querySelectorAll('.header__item-second-btn').forEach(el => {
      if (el != dropdownBtns) {
        el.classList.remove('header__item-second-btn_active');
      }
    });
    document.querySelectorAll('.submenu').forEach(el => {
      if (el != drops) {
        el.classList.remove('submenu__active');
      }
    });
    dropdownBtns.classList.toggle('header__item-second-btn_active');
    drops.classList.toggle('submenu__active');
  });
});

document.addEventListener('click', function (e) {
  let currentElement = e.target;
  if (!currentElement.closest('.header__list-second')) {
    document.querySelectorAll('.submenu').forEach(el => {
      el.classList.remove('submenu__active');
    });
    document.querySelectorAll('.header__item-second-btn').forEach(el => {
      el.classList.remove('header__item-second-btn_active');
    });
  }
});
