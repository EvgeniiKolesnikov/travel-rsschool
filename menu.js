const burger = document.getElementById('burger-button');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu__close');
const backdrop = document.getElementById('backdrop');

const acc = document.getElementById('account');

const openMobileMenu = () => {
  menu.style.marginRight = '0px';
  backdrop.style.pointerEvents = 'all';
  backdrop.style.opacity = 1;
};

const closeMobileMenu = (e) => {
  menu.style.marginRight = '-170px';
  backdrop.style.pointerEvents = 'none';
  backdrop.style.opacity = 0;
  acc.style.marginTop = '-800px';
  if (e.target.id == 'login_menu2') {
    backdrop.style.pointerEvents = 'all';
    backdrop.style.opacity = 1;
    acc.style.marginTop = '0px';
  }
};

burger.addEventListener('click', openMobileMenu);
menuClose.addEventListener('click', closeMobileMenu);
backdrop.addEventListener('click', closeMobileMenu);
menu.addEventListener('click', (e) => {
  if (e.target.matches('.menu__link')) {
    closeMobileMenu(e);
  }
});
