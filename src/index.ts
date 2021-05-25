import CardsField from './presentationLayer/cards-field';
import Header from './presentationLayer/header';
import HowToPlay from './presentationLayer/howToPlay';
import Router from './serviceLayer/router';

const rootNode = document.querySelector('body');

new Header(rootNode).render();
const content = document.querySelector('#content');
new CardsField(content).render();
// new HowToPlay(content).render();

const btnAboutGame = document.querySelector('#btnAboutGame');
const btnBestScore = document.querySelector('#btnBestScore');
const btnGameSettings = document.querySelector('#btnGameSettings');
const btnRegistry = document.querySelector('#btnRegistry');

function navigate(pathname: string) {
  new Router(content).onNavigate(pathname);
}

btnAboutGame.addEventListener('click', () => navigate(btnAboutGame.getAttribute('href')));
btnBestScore.addEventListener('click', () => navigate(btnBestScore.getAttribute('href')));
btnGameSettings.addEventListener('click', () => navigate(btnGameSettings.getAttribute('href')));
btnRegistry.addEventListener('click', () => navigate(btnRegistry.getAttribute('href')));
