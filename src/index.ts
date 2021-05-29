import GamePage from './presentationLayer/game-page';
import CardsField from './presentationLayer/cards-field';
import Header from './presentationLayer/header';
import HowToPlay from './presentationLayer/howToPlay';
import Router from './serviceLayer/router';
import Timer from './presentationLayer/timer';
import StartGameModal from './presentationLayer/modalStartGame';
import BestScore from './presentationLayer/bestScore';

const rootNode = document.querySelector('body');

new Header(rootNode).render();
const content = document.querySelector('#content');
// new Timer(content).startTimer();
// new GamePage(content).start();
// new HowToPlay(content).render();
const t = new BestScore(content);
setTimeout(() => t.render(), 1000);

const btnAboutGame = document.querySelector('#btnAboutGame');
const btnBestScore = document.querySelector('#btnBestScore');
const btnGameSettings = document.querySelector('#btnGameSettings');
const btnRegistry = document.querySelector('#btnRegistry');

// function navigate(pathname: string) {
//   new Router(content).onNavigate(pathname);
// }
const router = new Router(content);
function navigate(pathname: string) {
  router.navigate(pathname);
}

btnAboutGame.addEventListener('click', () => navigate(btnAboutGame.getAttribute('href')));
btnBestScore.addEventListener('click', () => navigate(btnBestScore.getAttribute('href')));
btnGameSettings.addEventListener('click', () => navigate(btnGameSettings.getAttribute('href')));
btnRegistry.addEventListener('click', () => navigate(btnRegistry.getAttribute('href')));
