'use strict';

// Elements
const html = document.querySelector("html");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const btn_wrap = document.querySelector(".header__btn-wrap");
const btnMenu = document.querySelector('.header__btn-menu');

// Data
let currentLanguage = 'En';

// Options

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

const videoLinks = {
  btnPlay1: 'https://www.youtube.com/embed/Cl_eHeom-RI?si=pynrS329wL_h5VYF?autoplay=1',
  btnPlay2: 'https://www.youtube.com/embed/HM137JVFsfQ?si=YXwHk1iqV5nHi4kq?autoplay=1',
}

// Video player
const btnsPlay = [
  document.getElementById('btnPlay1'),
  document.getElementById('btnPlay2'),
];
const videoWrap = document.querySelector('.header__video_wrap');
const video = document.querySelector('.header__video');

let isOpen = false;

const handlePlayVideo = (e) => {
  const {target: {id}} = e
  const link = videoLinks[id] || '';

  if (link) {
    isOpen = !isOpen;

    const topShift  = window.scrollY

    videoWrap.style.display = isOpen ? 'flex' : 'none';
    videoWrap.style.top = topShift + 'px';
    videoWrap.style.bottom = '-' + topShift + 'px';
    video.src = videoLinks[id] || '';

    document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto';
    btn_wrap.style.display = 'none';
  }
}

btnsPlay.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handlePlayVideo(e);
  })
})

const handleCloseVideo = () => {
  isOpen = !isOpen;

  videoWrap.style.display = 'none';
  video.src = '';
  document.documentElement.style.overflow = 'auto';
  btn_wrap.style.display = 'flex';
}

videoWrap.addEventListener('click', () => {
  handleCloseVideo();
})

document.body.addEventListener('keydown', (e) => {
  console.log('---', video?.src ? 'true' : 'false')
  if (e.key === 'Escape' && video?.src !== '') {
    handleCloseVideo();
  }
})

// Menu
const menu = document.querySelector('.header__menu');
const items = document.querySelectorAll('.header__menu-link');
const btn_menu_svg = document.querySelector('.header__btn-menu-svg');
let isOpenMenu = false;

const handelOpenMenu = () => {
  menu.style.transform = 'translateY(0)';
  document.documentElement.style.overflow  = 'hidden';
  btnMenu.classList.toggle('active');
  btn_menu_svg.classList.toggle('header__btn-menu-svg--active');
  isOpenMenu = !isOpenMenu;
}

const handleCloseMenu = () => {
  menu.style.transform = 'translateY(-100%)';
  document.documentElement.style.overflow  = 'auto';
  document.body.style.overflowX = 'hidden';
  btnMenu.classList.toggle('active');
  btn_menu_svg.classList.toggle('header__btn-menu-svg--active');
  isOpenMenu = !isOpenMenu;
}

btnMenu.addEventListener('click', () => {
  if (!isOpenMenu) {
    handelOpenMenu();
  } else {
    handleCloseMenu();
  }
});

items.forEach((item) => {
  item.addEventListener('click', () => {
    handleCloseMenu();
  })
})

// Languages
const btnLanguages = document.getElementById('btnLanguages');
const closeLanguages = document.querySelector('.header__closeLanguages');
const languages = document.querySelector('.header__languages');

const handleCloseLanguages = async () => {
  languages.style.transform = 'translateX(-100%)';
  document.body.style.overflow = 'auto';
  document.body.style.overflowX = 'hidden';

  await delay(300)

  menu.style.transform = 'translateY(0)';
  console.log('click')

}

btnLanguages.addEventListener('click', async () => {
  menu.style.transform = 'translateY(-100%)';

  await delay(300)

  languages.style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden';
  console.log('click2')
})

closeLanguages.addEventListener('click', (e) => {
  handleCloseLanguages();
})

// Btn to UP
const scrollTopBtn = document.getElementById('scrollTopBtn');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observerCallbackForUp = (entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrollTopBtn.classList.add('footer__btn-up--hiden')
      } else {
        scrollTopBtn.classList.remove('footer__btn-up--hiden')
      }
  });
};

const observer = new IntersectionObserver(observerCallbackForUp, observerOptions);

observer.observe(header)

// Btn to Bue Now
const btnWrap = document.getElementById('btnWrap');
const buyNowBtn = document.querySelector('.header__btn');

const observerCallbackForBuyNow = (entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        btnWrap.style.opacity = 0;
        btnWrap.style.bottom = '-60px';
        buyNowBtn.disabled = true;

      } else {
        btnWrap.style.opacity = 1
        btnWrap.style.bottom = 0;
        buyNowBtn.disabled = false;
      }
  });
};

const observerForBuy = new IntersectionObserver(observerCallbackForBuyNow, observerOptions);

observerForBuy.observe(footer)

// Info animation
let indexInfoItems = 0;
const infoItems = document.querySelectorAll('.info__item-img');

setInterval(() => {
  infoItems.forEach((item) => item.classList.remove('info__item-img--active'));

  infoItems[indexInfoItems].classList.add('info__item-img--active');

  indexInfoItems = (indexInfoItems + 1) % infoItems.length;
}, 1.5 * 1000);

// About animation
let indexAboutitems = 0;
const aboutItems = document.querySelectorAll('.about__about-item');

setInterval(() => {
  aboutItems.forEach((item) => item.classList.remove('about__about-item_active'));

  aboutItems[indexAboutitems].classList.add('about__about-item_active');

  indexAboutitems = (indexAboutitems + 1) % aboutItems.length;
}, 0.3 * 1000);

// About text
const handleAboutText = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('about__text--show');
    } else {
      entry.target.classList.remove('about__text--show');
    }
  });
};

const observerAboutText = new IntersectionObserver(handleAboutText, {
  root: null,
  rootMargin: "-200px",
  threshold: 0.5,
});

document.querySelectorAll('.about__text').forEach(el => observerAboutText.observe(el));

// Slect languages on desctop
const btnLanguagesDes = document.querySelector('.header__language-btn-des');
const languagesListDes = document.querySelector('.header__language-list-des');
const languagesItemsDes = document.querySelectorAll('.header__language-item-des');
const languagesItems = document.querySelectorAll('.header__language-btn');

let isOpenLanguagesListDes = false;

const closeLanguagesList = () => {
  languagesListDes.style.display = 'none';
  languagesListDes.style.height = '0';

  isOpenLanguagesListDes = false;
}

const handleLanguagesList = () => {
  if (isOpenLanguagesListDes) {
    closeLanguagesList();
  } else {
    languagesListDes.style.display = 'block';
    languagesListDes.style.height = 'min-content';

    isOpenLanguagesListDes = true;
  }
}

btnLanguagesDes.addEventListener('click', () => {
  handleLanguagesList()
})

document.body.addEventListener('click', (e) => {
  if (!languagesListDes.contains(e.target) && !btnLanguagesDes.contains(e.target)) {
    closeLanguagesList();
  }
})

languagesItemsDes.forEach((item) => {
  item.addEventListener('click', () => {
    btnLanguagesDes.textContent = item.outerText;
    closeLanguagesList();
  })
})

languagesItems.forEach((item) => {
  item.addEventListener('click', () => {
    btnLanguagesDes.textContent = item.value;

    languages.style.transform = 'translateX(-100%)';
    document.documentElement.style.overflow  = 'auto';
    isOpenMenu = false;
    btnMenu.classList.remove('active');
    btn_menu_svg.classList.remove('header__btn-menu-svg--active')
  })
})

// Functions

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Slider
const slides = document.querySelectorAll('.header__slide');
const line = document.querySelector('.header__line');
const prevBtn = document.getElementById('slider__btn--prev');
const nextBtn = document.getElementById('slider__btn--next');

let current = 0;
let interval = setInterval(nextSlide, 4000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('header__slide--active', i === index);
  });
  line.style.left = `${68 * index}px`;
  current = index;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 4000);
}

function nextSlide() {
  let next = (current + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  let prev = (current - 1 + slides.length) % slides.length;
  showSlide(prev);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});
