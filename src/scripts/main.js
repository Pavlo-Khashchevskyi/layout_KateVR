'use strict';

//

const translations = {
  en: {
    header_language_english: "English",
    header_language_polish: "Polish",
    header_language_ukrainian: "Ukrainian",
    header_nav_about: "About",
    header_nav_tech: "Tech",
    header_nav_benefits: "Benefits",
    header_nav_contact: "Contact",
    header_nav_faq: "FAQ",
    header_nav_help: "Help",
    header_nav_more: "More",
    header_new_start: "THE NEW START OF",
    header_vr_locomotion: "VR LOCOMOTION",
    header_desc_main: "Discover the most comprehensive VR Locomotion system, and unlock infinite motion in any games on any platforms!",
    header_btn_buy_now: "Buy Now",
    header_btn_previous: "Previous",
    header_btn_next: "Next",
    header_btn_lang: "Language",
    info_more_than_gaming: "MORE THAN",
    info_gaming: "GAMING!",
    info_interested_in: "This also made for people who are interested in...",
    info_education: "EDUCATION",
    info_education_desc: "Create aducational simulations, trainings and much more with unlimited virtual space and minimum physical space",
    info_real_estate: "REAL ESTATE",
    info_real_estate_desc: "Desighn architectural projects in a deeply realistic environment allowing visitors to freely walk around, and feel their vibe",
    info_fitness: "FITNESS",
    info_fitness_desc: "Combine business with pleasure, and discover countless ways to stay fit while playing your favorite VR Games!",
    info_social_interactions: "SOCIAL INTERACTIONS",
    info_social_interactions_desc: "Hang out with your friends in the virtual world when you can’t meet space requirements",
    about_title_small_1: "ABOUT",
    about_title_aqua: "PRODUCT",
    about_title_big_1: "ABOUT",
    about_text_1: "KAT loco is a foot-based VR locomotion system that gives complete physical control over lower-body actions, allowing you to freely walk, run, and carry out just any other movement in virtual reality.",
    about_hello: "Hello,",
    about_nice_to_meet: "NICE TO MEET",
    about_you: " YOU!",
    about_text_2: "KAT VR is an independent company dedicated to the research, development, and sales of VR Locomotion products and solutions. Founded in 2013, we have quickly grown to become one of the world’s leading professional suppliers of VR games’ & simulations’ equipment",
    tech_title: "TECH",
    tech_title_aqua: " SPECS",
    tech_sensor: "SENSOR",
    tech_sensor_text: `Weight: 35g/1.23oz each
                      Dimension: 50mm/1.97in
                      24mm/0.94in
                      Light: LED lights`,
    tech_batteries: "BATTERIES",
    tech_batteries_text: `Type: Lithium-ion polymer batteries
                          Capacity: 370mAh
                          Battery life: 10h of continuous use, 150 hours on standby
                          Charging: Fast charging - 1 hour
                          Charging voltage and current: 5V = 0.5A`,
    tech_connection: "CONNECTION",
    tech_connection_text: `Wireless: Bluetooth 4.2
                          Signal range: 5m
                          Receiver: USB 2.0 and above`,
    benefits_title_why: "WHY",
    benefits_title_loco: "KAT LOCO?",
    benefits_compatibility_title: "UNIVERSALLY COMPATIBLE",
    benefits_compatibility_text: "KAT Loco offers universal compatibility across all major VR headsets and platforms...",
    benefits_control_title: "VR/PC CONTROL PANEL",
    benefits_control_text: "Our Multifunctional Software allows for quick access to KAT Loco’s control panel both from...",
    benefits_wireless_title: "WIRELESS SENSORS",
    benefits_wireless_text: "What makes it even more advanced, KAT Loco is entirely wireless, and comes with a...",
    contact_subtitle: "Have any questions?",
    contact_title_main: "GET IN",
    contact_title_touch: "TOUCH",
    contact_response_text: "Our manager will reply you within 15 minutes",
    contact_label_name: "Name*",
    contact_label_email: "Email*",
    contact_label_phone: "Phone*",
    contact_label_message: "Message",
    contact_btn: "Contact Us",
    footer_nav_info: "Info",
    footer_nav_about: "About",
    footer_nav_tech: "Tech",
    footer_nav_benefits: "Benefits",
    },
  ua: {
    header_language_english: "Англійська",
    header_language_polish: "Польська",
    header_language_ukrainian: "Українська",
    header_nav_about: "Про нас",
    header_nav_tech: "Технології",
    header_nav_benefits: "Переваги",
    header_nav_contact: "Контакти",
    header_nav_faq: "Питання",
    header_nav_help: "Допомога",
    header_nav_more: "Більше",
    header_new_start: "НОВИЙ ПОЧАТОК",
    header_vr_locomotion: "VR ЛОКОМОЦІЯ",
    header_desc_main: "Відкрийте найповнішу систему VR Локомоції, що відкриває безмежний рух у будь-яких іграх на будь-яких платформах!",
    header_btn_buy_now: "Купити",
    header_btn_previous: "Попередній",
    header_btn_next: "Наступний",
    header_btn_lang: "Мова",
    info_more_than_gaming: "БІЛЬШЕ НІЖ",
    info_gaming: "ГЕЙМІНГ!",
    info_interested_in: "Це також створено для людей, які зацікавлені у...",
    info_education: "ОСВІТА",
    info_education_desc: "Створюйте освітні симуляції, тренінги та багато іншого з необмеженим віртуальним простором і мінімальним фізичним простором",
    info_real_estate: "НЕРУХОМІСТЬ",
    info_real_estate_desc: "Проектуйте архітектурні проєкти в максимально реалістичному середовищі, що дозволяє відвідувачам вільно ходити і відчувати атмосферу",
    info_fitness: "ФІТНЕС",
    info_fitness_desc: "Поєднуйте бізнес із задоволенням та відкривайте безліч способів залишатися у формі, граючи у ваші улюблені VR ігри!",
    info_social_interactions: "СОЦІАЛЬНІ ВЗАЄМОДІЇ",
    info_social_interactions_desc: "Проводьте час з друзями у віртуальному світі, коли неможливо зустрітися в реальному просторі",
    about_title_small_1: "ПРО",
    about_title_aqua: "ПРОДУКТ",
    about_title_big_1: "ПРО",
    about_text_1: "KAT loco — це VR-система локомоції на основі рухів ніг, що дає повний фізичний контроль над діями нижньої частини тіла, дозволяючи вільно ходити, бігати та виконувати будь-які інші рухи у віртуальній реальності.",
    about_hello: "Привіт,",
    about_nice_to_meet: "РАДІ ЗУСТРІТИ",
    about_you: " ТЕБЕ!",
    about_text_2: "KAT VR — незалежна компанія, яка займається дослідженнями, розробкою та продажем продуктів і рішень для VR локомоції. Заснована у 2013 році, швидко стала одним з провідних професійних постачальників обладнання для VR ігор та симуляцій.",
    tech_title: "ТЕХ",
    tech_title_aqua: " ХАРАКТЕРИСТИКИ",
    tech_sensor: "СЕНСОР",
    tech_sensor_text: `Вага: 35 г/1,23 унції кожен
                      Розміри: 50 мм/1,97 дюйма
                      24 мм/0,94 дюйма
                      Світло: світлодіодні лампи`,
    tech_batteries: "АКУМУЛЯТОРИ",
    tech_batteries_text: `Тип: літій-іонні полімерні акумулятори
                          Ємність: 370 мАг
                          Час роботи: 10 годин безперервного використання, 150 годин у режимі очікування
                          Зарядка: швидка зарядка - 1 година
                          Напруга і струм зарядки: 5В = 0,5А`,
    tech_connection: "З'ЄДНАННЯ",
    tech_connection_text: `Бездротове: Bluetooth 4.2
                          Дальність сигналу: 5 м
                          Приймач: USB 2.0 і вище`,
    benefits_title_why: "ЧОМУ",
    benefits_title_loco: "KAT LOCO?",
    benefits_compatibility_title: "СУМІСНИЙ З УСІМ",
    benefits_compatibility_text: "KAT Loco пропонує універсальну сумісність з усіма основними VR-гарнітурами та платформами...",
    benefits_control_title: "ПАНЕЛЬ КЕРУВАННЯ VR/PC",
    benefits_control_text: "Наше багатофункціональне ПЗ забезпечує швидкий доступ до панелі керування KAT Loco як з ПК, так і з VR...",
    benefits_wireless_title: "БЕЗДРОТОВІ ДАТЧИКИ",
    benefits_wireless_text: "Що робить систему ще більш сучасною – KAT Loco повністю бездротовий і постачається з...",
    contact_subtitle: "Маєш запитання?",
    contact_title_main: "ЗВ’ЯЖИСЬ",
    contact_title_touch: "З НАМИ",
    contact_response_text: "Наш менеджер відповість протягом 15 хвилин",
    contact_label_name: "Ім’я*",
    contact_label_email: "Електронна пошта*",
    contact_label_phone: "Телефон*",
    contact_label_message: "Повідомлення",
    contact_btn: "Зв’язатися з нами",
      footer_nav_info: "Інформація",
    footer_nav_about: "Про нас",
    footer_nav_tech: "Технології",
    footer_nav_benefits: "Переваги",
  },
  pl: {
    header_language_english: "Angielski",
    header_language_polish: "Polski",
    header_language_ukrainian: "Ukraiński",
    header_nav_about: "O nas",
    header_nav_tech: "Technologie",
    header_nav_benefits: "Korzyści",
    header_nav_contact: "Kontakt",
    header_nav_faq: "FAQ",
    header_nav_help: "Pomoc",
    header_nav_more: "Więcej",
    header_new_start: "NOWY POCZĄTEK",
    header_vr_locomotion: "VR LOKOMOCJA",
    header_desc_main: "Odkryj najbardziej kompleksowy system VR Lokomocji i odblokuj nieskończony ruch w dowolnych grach na dowolnych platformach!",
    header_btn_buy_now: "Kup teraz",
    header_btn_previous: "Poprzedni",
    header_btn_next: "Następny",
    header_btn_lang: "Język",
    info_more_than_gaming: "WIĘCEJ NIŻ",
    info_gaming: "GRANIE!",
    info_interested_in: "To także dla osób zainteresowanych...",
    info_education: "EDUKACJA",
    info_education_desc: "Twórz symulacje edukacyjne, szkolenia i wiele więcej z nieograniczoną przestrzenią wirtualną i minimalną przestrzenią fizyczną",
    info_real_estate: "NIERUCHOMOŚCI",
    info_real_estate_desc: "Projektuj projekty architektoniczne w bardzo realistycznym środowisku, które pozwala odwiedzającym swobodnie chodzić i poczuć atmosferę",
    info_fitness: "FITNESS",
    info_fitness_desc: "Połącz biznes z przyjemnością i odkryj niezliczone sposoby na pozostanie w formie, grając w swoje ulubione gry VR!",
    info_social_interactions: "INTERAKCJE SPOŁECZNE",
    info_social_interactions_desc: "Spotykaj się z przyjaciółmi w świecie wirtualnym, gdy nie możesz spełnić wymagań przestrzennych",about_title_small_1: "O",
    about_title_aqua: "PRODUKCIE",
    about_title_big_1: "O",
    about_text_1: "KAT loco to system lokomocji VR oparty na ruchach stóp, który daje pełną kontrolę fizyczną nad ruchami dolnej części ciała, pozwalając swobodnie chodzić, biegać i wykonywać inne ruchy w wirtualnej rzeczywistości.",
    about_hello: "Cześć,",
    about_nice_to_meet: "MIŁO CIĘ",
    about_you: " POZNAĆ!",
    about_text_2: "KAT VR to niezależna firma zajmująca się badaniami, rozwojem i sprzedażą produktów i rozwiązań do lokomocji VR. Założona w 2013 roku, szybko stała się jednym z wiodących profesjonalnych dostawców sprzętu do gier i symulacji VR.",
    tech_title: "TECH",
    tech_title_aqua: " SPECYFIKACJE",
    tech_sensor: "CZUJNIK",
    tech_sensor_text: `Waga: 35 g/1,23 oz każdy
                      Wymiary: 50 mm/1,97 cala
                      24 mm/0,94 cala
                      Światło: diody LED`,
    tech_batteries: "BATERIE",
    tech_batteries_text: `Typ: baterie litowo-jonowe polimerowe
                          Pojemność: 370mAh
                          Czas pracy baterii: 10h ciągłego użytkowania, 150 godzin w trybie czuwania
                          Ładowanie: szybkie ładowanie - 1 godzina
                          Napięcie i prąd ładowania: 5V = 0,5A`,
    tech_connection: "POŁĄCZENIE",
    tech_connection_text: `Bezprzewodowe: Bluetooth 4.2
                          Zasięg sygnału: 5m
                          Odbiornik: USB 2.0 i wyżej`,
    benefits_title_why: "DLACZEGO",
    benefits_title_loco: "KAT LOCO?",
    benefits_compatibility_title: "UNIWERSALNA KOMPATYBILNOŚĆ",
    benefits_compatibility_text: "KAT Loco oferuje uniwersalną kompatybilność ze wszystkimi głównymi zestawami VR i platformami...",
    benefits_control_title: "PANEL STEROWANIA VR/PC",
    benefits_control_text: "Nasze wielofunkcyjne oprogramowanie umożliwia szybki dostęp do panelu sterowania KAT Loco zarówno z PC, jak i VR...",
    benefits_wireless_title: "BEZPRZEWODOWE CZUJNIKI",
    benefits_wireless_text: "Co czyni go jeszcze bardziej zaawansowanym — KAT Loco jest całkowicie bezprzewodowy i wyposażony w...",
    contact_subtitle: "Masz pytania?",
    contact_title_main: "SKONTAKTUJ SIĘ",
    contact_title_touch: "Z NAMI",
    contact_response_text: "Nasz menedżer odpowie w ciągu 15 minut",
    contact_label_name: "Imię*",
    contact_label_email: "Email*",
    contact_label_phone: "Telefon*",
    contact_label_message: "Wiadomość",
    contact_btn: "Skontaktuj się z nami",
    footer_nav_info: "Informacje",
    footer_nav_about: "O nas",
    footer_nav_tech: "Technologie",
    footer_nav_benefits: "Korzyści",
  }
};

// Elements
const html = document.querySelector("html");
const header = document.getElementById("header");
const contact = document.getElementById("contact");
const footer = document.getElementById("footer");
const btn_wrap = document.querySelector(".header__btn-wrap");
const btnMenu = document.querySelector('.header__btn-menu');

// Options

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

const videoLinks = {
  btnPlay1: 'https://www.youtube.com/embed/Cl_eHeom-RI?si=pynrS329wL_h5VYF?autoplay=1',
  btnPlay2: 'https://www.youtube.com/embed/kcoJUIjIXBw?si=pqh3YMjIUy9DlZzU?autoplay=1',
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
}

btnLanguages.addEventListener('click', async () => {
  menu.style.transform = 'translateY(-100%)';

  await delay(300)

  languages.style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden';
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

// Tech items

const techItemsBtns = document.querySelectorAll('.tech__item-btn');
const techItemsContetns = document.querySelectorAll('.tech__item-content');

const handlTechItemsBtn = (el) => {
  const nextEl = el.nextElementSibling;
  const isOpenTechItem = nextEl.style.display === 'block';

  nextEl.style.display = isOpenTechItem ? 'none' : 'block';
  el.classList.toggle('tech__item-btn--close');
};

const handleCloseTechItem = (el) => {
  const width = window.innerWidth;
  if (width > 1280) {
    return;
  }

  const prevEl = el.previousElementSibling;

  prevEl.classList.toggle('tech__item-btn--close');
  el.style.display = 'none';
};

techItemsBtns.forEach((el) => {
  el.addEventListener('click', () => handlTechItemsBtn(el))
});

techItemsContetns.forEach((el) => {
  el.addEventListener('click', () => handleCloseTechItem(el))
});

// Benefits animation

let indexBenItems = 0;
const benItems = document.querySelectorAll('.benefits__item-img');

setInterval(() => {
  benItems.forEach((item) => item.classList.remove('benefits__item-img--active'));

  benItems[indexBenItems].classList.add('benefits__item-img--active');

  indexBenItems = (indexBenItems + 1) % benItems.length;
}, 1.5 * 1000);

// Slect languages on desctop
const btnLanguagesDes = document.querySelector('.header__language-btn-des');
const languagesListDes = document.querySelector('.header__language-list-des');
const languagesItemsDes = document.querySelectorAll('.header__language-item-des');
const languagesItems = document.querySelectorAll('.header__language-btn');

let isOpenLanguagesListDes = false;
let currentLang = localStorage.getItem('lang') || 'en';

const translatePage = (lang) => {
  console.log('translate', lang)
   const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');

    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  btnLanguagesDes.textContent = lang.charAt(0).toUpperCase() + lang.slice(1);
  localStorage.setItem('lang', lang);
}

translatePage(currentLang);

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
});

document.body.addEventListener('click', (e) => {
  if (!languagesListDes.contains(e.target) && !btnLanguagesDes.contains(e.target)) {
    closeLanguagesList();
  }
});

const allLanguageItems = [...languagesItemsDes];

allLanguageItems.forEach((item) => {
  item.addEventListener('click', () => {
    translatePage(item.outerText.toLowerCase())
    closeLanguagesList();
  })
});

languagesItems.forEach((item) => {
  item.addEventListener('click', () => {
    translatePage(item.value.toLowerCase());

    languages.style.transform = 'translateX(-100%)';
    document.documentElement.style.overflow  = 'auto';
    isOpenMenu = false;
    btnMenu.classList.remove('active');
    btn_menu_svg.classList.remove('header__btn-menu-svg--active');
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


// Reload with debounce for resize vuieport
let lastWidth = window.innerWidth;
let lastHeight = window.innerHeight;

window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;

  if (currentWidth !== lastWidth || currentHeight !== lastHeight) {
    lastWidth = currentWidth;
    lastHeight = currentHeight;

    clearTimeout(window._resizeReload);
    window._resizeReload = setTimeout(() => {
      location.reload();
    }, 300);
  }
});

// animation block
const blocks = document.querySelectorAll('.block');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    const {classList} = entry.target;
    if (!classList) {
      return;
    }

    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.left = 0;
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.left = classList.contains('block--left') ? '-40px': '40px';
    }
  });
};

const observerSections = new IntersectionObserver(handleIntersection, options);

blocks.forEach(section => {
  observerSections.observe(section);
});

// Hepl-page
const helpPage = document.querySelector('.help-page');
const helpPageContainer = document.querySelector('.help-page__content');
const goToContactUs = document.getElementById('help-page-btn-contact-us');

const btnsOpenHelpPage = [
  document.getElementById('btn-help-page-close_1'),
  document.getElementById('btn-help-page-close_2'),
];
const closeBtn = document.querySelector('.help-page__btn-close');

const onepHelpPage = () => {
  const topShift  = window.scrollY;
  console.log('topShift', topShift)
  helpPage.style.top = topShift + 'px';


  helpPage.classList.remove('help-page--hidden');
  helpPageContainer.classList.remove('help-page__content--hidden');
  document.documentElement.style.overflow  = 'hidden';
};

const closeHelpPage = () => {
  helpPage.classList.add('help-page--hidden');
  helpPageContainer.classList.add('help-page__content--hidden');
  document.documentElement.style.overflow  = 'auto';
};

btnsOpenHelpPage.forEach((btn) => {
  btn.addEventListener('click', () => {
    handleCloseMenu();
    onepHelpPage();
  })
});

closeBtn.addEventListener('click', () => {
  closeHelpPage();
});

goToContactUs.addEventListener('click', () => {
  closeHelpPage();
  contact.scrollIntoView({ behavior: "smooth" });
});
