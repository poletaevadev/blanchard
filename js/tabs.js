document.querySelectorAll('.languages__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.languages__btn').forEach(function (btn) {
      btn.classList.remove('languages__btn_active')
    });
    e.currentTarget.classList.add('languages__btn_active');

    document.querySelectorAll('.tabs__item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs__item_active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item_active', 'tabs_animate');
  });
});

document.querySelectorAll('.accordion__content-link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.accordion__content-link').forEach(function (btn) {
      btn.classList.remove('accordion__content-link_active');
    });
    e.currentTarget.classList.add('accordion__content-link_active');


    document.querySelectorAll('.tabs__content-left').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs__content-left_active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content-left_active', 'tabs_animate')
  });
});
