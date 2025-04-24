import Swiper from 'swiper';
import 'swiper/css';
import { openBar } from './js/Header';
import { cookiePolicy } from './js/cookiesPolicy';
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: -10,
  slidesPerView: 1,
  simulateTouch: true,
  grabCursor: true,
});
openBar();
cookiePolicy();
