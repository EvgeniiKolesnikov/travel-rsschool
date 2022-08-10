const account = document.getElementById('account');
const login_menu1 = document.getElementById('login_menu1');
const login_menu2 = document.getElementById('login_menu2');

const login = document.getElementById('login');
const register = document.getElementById('register');

const email = document.getElementById('email');
const password = document.getElementById('password');

const sign1 = document.getElementById('sign1');
const sign2 = document.getElementById('sign2');

const l = document.getElementsByClassName('login');
const s = document.getElementsByClassName('signup');


const showInputs = () => {
  // console.log(email.value, email.value);
  if (email.value && password.value) {
    alert(`email: ${email.value}\npassword: ${password.value}`);
  }
};

const openAccountModal = () => {
  backdrop.style.pointerEvents = 'all';
  backdrop.style.opacity = 1;

  account.style.marginTop = '0px';
};

const onRegister = () => {
  for (let i = 0; i < l.length; i++) {
    l[i].style.display = 'none';
  }
  for (let i = 0; i < s.length; i++) {
    s[i].style.display = 'block';
  }
};

const onLogin = () => {
  for (let i = 0; i < l.length; i++) {
    l[i].style.display = 'block';
  }
  for (let i = 0; i < s.length; i++) {
    s[i].style.display = 'none';
  }
};

sign1.addEventListener('click', showInputs);
sign2.addEventListener('click', showInputs);

login.addEventListener('click', onLogin);
register.addEventListener('click', onRegister);

login_menu1.addEventListener('click', openAccountModal);
login_menu2.addEventListener('click', openAccountModal);