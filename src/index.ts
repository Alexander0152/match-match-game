import Header from './presentationLayer/header';
import HowToPlay from './presentationLayer/howToPlay';
import Router from './serviceLayer/router';

const rootNode = document.querySelector('body');

new Header(rootNode).render();
const content = document.querySelector('#content');
new HowToPlay(content).render();

const btnAboutGame = document.querySelector('#btnAboutGame');
const btnBestScore = document.querySelector('#btnBestScore');
const btnGameSettings = document.querySelector('#btnGameSettings');
const btnRegistry = document.querySelector('#btnRegistry');

const router = new Router(content);
function navigate(pathname: string) {
  router.navigate(pathname);
}

btnAboutGame.addEventListener('click', () => navigate(btnAboutGame.getAttribute('href')));
btnBestScore.addEventListener('click', () => navigate(btnBestScore.getAttribute('href')));
btnGameSettings.addEventListener('click', () => navigate(btnGameSettings.getAttribute('href')));
btnRegistry.addEventListener('click', () => navigate(btnRegistry.getAttribute('href')));
