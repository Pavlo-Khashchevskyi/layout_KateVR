'use strict';

// Video player
const btnsPlay = [
  document.getElementById('btnPlay1'),
  document.getElementById('btnPlay2'),
];
const videoWrap = document.querySelector('.header__video_wrap');
const video = document.querySelector('.header__video');

const videoLinks = {
  btnPlay1: 'https://www.youtube.com/embed/Cl_eHeom-RI?si=pynrS329wL_h5VYF?autoplay=1',
  btnPlay2: 'https://www.youtube.com/embed/HM137JVFsfQ?si=YXwHk1iqV5nHi4kq?autoplay=1',
}

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

    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
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

  document.body.style.overflow = 'auto';
  video.src = '';
}

videoWrap.addEventListener('click', () => {
  handleCloseVideo();
})

document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && video.src === videoURL) {
    handleCloseVideo();
  }
})

// menu
const btnMenu = document.querySelector('.header__btnMenu');
const closeMenu = document.querySelector('.header__closeMenu');
const menu = document.querySelector('.header__menu');
const items = document.querySelectorAll('.header__menu-item')

const handleCloseMenu = () => {
  menu.style.transform = 'translateY(-100%)';
  document.body.style.overflow = 'auto';
}

btnMenu.addEventListener('click', () => {
  menu.style.transform = 'translateY(0)';
  document.body.style.overflow = 'hidden';
})

items.forEach((item) => {
  item.addEventListener('click', () => {
    handleCloseMenu();
  })
})

closeMenu.addEventListener('click', () => {
  handleCloseMenu();
})
