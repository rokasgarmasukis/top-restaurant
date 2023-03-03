import './css/style.css';
import home from './pages/home';
import contact from './pages/contact';
import menu from './pages/menu';

//
const homeLink = document.getElementById('home');

const menuLink = document.getElementById('menu');

const contactLink = document.getElementById('contact');

const render = (page) => {
  console.log('Rendering');
  const content = document.getElementById('content');

  content.replaceChildren(page);
};

homeLink.addEventListener('click', () => render(home()));
menuLink.addEventListener('click', () => render(menu()));
contactLink.addEventListener('click', () => render(contact()));

//
render(home());
