import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { openBar } from './js/Header';
import { cookiePolicy } from './js/cookiesPolicy';
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  spaceBetween: -10,
  slidesPerView: 1,
  simulateTouch: true,
  grabCursor: true,
});
openBar();
cookiePolicy();
