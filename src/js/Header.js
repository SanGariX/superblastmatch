export const openBar = () => {
  const btn1 = document.querySelector('.header-nav-mobile-button');
  btn1.addEventListener('click', () => {
    const navBar = document.querySelector('.header-nav-mobile');
    navBar.classList.toggle('active');
  });
  const btn2 = document.querySelector('.header-nav-mobile-button-close');
  btn2.addEventListener('click', () => {
    const navBar = document.querySelector('.header-nav-mobile');
    navBar.classList.remove('active');
  });
};
