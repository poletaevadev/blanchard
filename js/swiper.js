window.addEventListener('DOMContentLoaded', function () {

  let swiper = new Swiper('.swiper-hero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 5000,
    },

    effect: 'fade',
    speed: 300,
  });

  // Gallery

  let gallerySlider = new Swiper('.swiper-gallery', {
    pagination: {
      el: '.swiper-gallery__pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-gallery__btn-next',
      prevEl: '.swiper-gallery__btn-prev'
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
          rows: 1
        },
        spaceBetween: 15
      },
      581: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 34
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 50
      }
    },

    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий',
    }
  });

  // Editions

  (() => {
    const MOBILE_WIDTH = 580;

    const sliderParamsNotMobile = {
      sliderWrap: "swiper-editions",
      cardsContainerName: "swiper-editions",
      cardsWrapName: "editions__box",
      card: "editions__slide",
    };

    function getWindowWidth() {
      console.log(document.body.scrollWidth);
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    function activateSlider(params) {
      params.cardsSlider = new Swiper('.swiper-editions', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1
        },
        spaceBetween: 50,
        pagination: {
          el: '.swiper-editions__pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-editions__btn-next',
          prevEl: '.swiper-editions__btn-prev'
        },

        breakpoints: {
          580: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34
          },

          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        },

        a11y: {
          prevSlideMessage: 'Предыдущий',
          nextSlideMessage: 'Следующий',
        },

        on: {
          beforeInit() {
            document.querySelectorAll(`.${params.card}`).forEach((el) => {
              el.classList.add("swiper-slide");
            });
          },

          beforeDestroy() {
            this.slides.forEach((el) => {
              el.classList.remove("swiper-slide");
              el.removeAttribute("role");
              el.removeAttribute("aria-label");
            });

            this.pagination.el.remove();
            navigation.remove();
          }
        }
      });
    }

    function destroySlider(params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function checkWindowWidth(params) {
      const currentWidth = getWindowWidth();
      params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
      params.cardsContainer = document.querySelector(
        `.${params.cardsContainerName}`
      );
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (
        currentWidth > MOBILE_WIDTH &&
        (!params.cardsSlider || params.cardsSlider.destroyed)
      ) {
        activateSlider(params);
      } else if (currentWidth <= MOBILE_WIDTH && params.cardsSlider) {
        destroySlider(params);
      }
    }

    checkWindowWidth(sliderParamsNotMobile);

    window.addEventListener("resize", function () {
      checkWindowWidth(sliderParamsNotMobile);
    });
  })();



  // Projects

  let projectsSlider = new Swiper('.swiper-projects', {
    navigation: {
      nextEl: '.swiper-projects-btn-next',
      prevEl: '.swiper-projects-btn-prev'
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 50
      },

      581: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },

      611: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },

    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий',
    }
  });

  // Events

  (() => {
    const MOBILE_WIDTH = 581;
    const DESKTOP_WIDTH = 769;
    const btn = document.querySelector(".events__btn-show");

    const sliderMobileParams = {
      paginationClassName: "events-pagination",
      cardsContainerName: "events__content",
      cardsWrapName: "events__box",
      card: "events__item",
      hiddenClass: "is-hidden"
    };

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

    function activateMobileSlider(params) {
      const pagination = document.createElement("div");
      pagination.classList.add(params.paginationClassName);
      params.cardsContainer.append(pagination);

      params.cardsContainer.classList.add("swiper-container");
      params.cardsWrap.classList.add("swiper-wrapper");

      params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: `.${params.cardsContainerName} .${params.paginationClassName}`,
          clickable: true
        },

        on: {
          beforeInit() {
            document.querySelectorAll(`.${params.card}`).forEach((el) => {
              el.classList.add("swiper-slide");
            });
          },

          beforeDestroy() {
            this.slides.forEach((el) => {
              el.classList.remove("swiper-slide");
              el.removeAttribute("role");
              el.removeAttribute("aria-label");
            });

            this.pagination.el.remove();
          }
        }
      });
    }

    function destroyMobileSlider(params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function setHiddenCards(params, windowWidth) {
      const cards = document.querySelectorAll(`.${params.card}`);
      let quantity = cards.length;

      if (windowWidth > MOBILE_WIDTH && windowWidth < DESKTOP_WIDTH) {
        quantity = 2;
      }

      if (windowWidth >= DESKTOP_WIDTH) {
        quantity = 3;
      }

      cards.forEach((card, i) => {
        card.classList.remove(params.hiddenClass);
        if (i >= quantity) {
          card.classList.add(params.hiddenClass);
        }
      });
    }

    function showCards(e) {
      const cards = document.querySelectorAll(`.${sliderMobileParams.card}`);

      e.target.style = "display: none";
      btn.style.padding = "0";

      cards.forEach((card) => {
        card.classList.remove(sliderMobileParams.hiddenClass);
      });
    }

    function checkWindowWidthMobile(params) {
      const currentWidth = getWindowWidth();
      btn.style = "";
      params.cardsContainer = document.querySelector(
        `.${params.cardsContainerName}`
      );
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (
        currentWidth <= MOBILE_WIDTH &&
        (!params.cardsSlider || params.cardsSlider.destroyed)
      ) {
        activateMobileSlider(params);
      } else if (currentWidth > MOBILE_WIDTH && params.cardsSlider) {
        destroyMobileSlider(params);
      }

      setHiddenCards(params, currentWidth);
    }

    checkWindowWidthMobile(sliderMobileParams);
    btn.addEventListener("click", showCards);

    window.addEventListener("resize", function () {
      checkWindowWidthMobile(sliderMobileParams);
    });
  })();

});
