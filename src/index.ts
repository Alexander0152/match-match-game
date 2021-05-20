import Header from './presentationLayer/header';
import HowToPlay from './presentationLayer/howToPlay';
// import RegistrationForm from './presentationLayer/registrationForm';
import Router from './serviceLayer/router';

const rootNode = document.querySelector('#root');
new Header(rootNode).render();
const content = document.querySelector('#content');

const btnAboutGame = document.querySelector('#btnAboutGame');
const btnBestScore = document.querySelector('#btnBestScore');
const btnGameSettings = document.querySelector('#btnGameSettings');

function navigate() {
  new Router(content).onNavigate('/about_game');
}

function navigate1() {
  new Router(content).onNavigate('/about1_game');
}

// window.history.pushState({}, pathname, window.location.origin + pathname);

// window.onpopstate = () => {
//   this.root.innerHTML = this.routes[window.location.pathname];
// };

btnAboutGame.addEventListener('click', navigate);
btnBestScore.addEventListener('click', navigate1);
btnGameSettings.addEventListener('click', navigate);
// new HowToPlay(rootNode).render();

// const router: Router = new Router(rootNode);

// function onNavigate(pathname: string): boolean {
//   alert('dec');
//   // router.onNavigate(pathname);
//   return true;
// }
// new RegistrationForm(rootNode).render();

// router: Router;

// const router = new Router({
//   mode: 'hash',
//   root: '/',
// });

// router
//   .add('/about/', () => {
//     alert('welcome in about page');
//     return true;
//   })
//   .add('/about1/', () => {
//     alert('welcome in about page');
//     return true;
//   })
//   .add('', () => {
//     // general controller
//     console.log('welcome in catch all controller');
//     return true;
//   });
