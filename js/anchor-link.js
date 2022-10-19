document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
});

const MOBILE_WIDTH = 768;

function getWindowWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
}

function scrollToContent(link, isMobile) {
  if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
    return;
  }

  document.querySelector('.tabs__content-left_active').scrollIntoView({
    behavior: 'smooth'
  });

  smoothscroll.polyfill();

}

document.querySelectorAll('.accordion__content-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    scrollToContent(this, true);
  });
});
