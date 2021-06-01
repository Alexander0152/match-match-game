import ImageCategoryModel from '../businessLayer/image-category-model';
import Game from './game';
import Timer from './timer';

export default class GamePage {
  private readonly game: Game;

  private readonly timerContainer: Element;

  private timer: Timer;

  private cardsType: string = null;

  private difficulty: string = null;

  constructor(private readonly rootElement: Element) {
    this.game = new Game();

    this.timerContainer = document.querySelector('#content');
    this.timer = new Timer(this.timerContainer);
    this.timer.startWathingTimer();
    this.rootElement.appendChild(this.game.element);

    const btnStopGame: HTMLButtonElement = document.querySelector('#btnStopGame');

    btnStopGame.addEventListener('click', () => {
      btnStopGame.style.display = 'none';
      const btnRegister: HTMLButtonElement = document.querySelector('#btnRegisterNewPlayer');
      btnRegister.style.display = 'initial';
      this.timer.stopGameProcessTimer();
      const btnHome = document.querySelector('#btnAboutGame');
      (btnHome as HTMLDivElement).click();
    });
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    this.checkSettings();

    const settings = `${this.cardsType}/${this.difficulty}`;
    let cat;

    if (
      settings === 'null/null' ||
      settings === 'dogs/null' ||
      settings === 'dogs/4x4' ||
      settings === 'null/4x4'
    ) {
      const firstCat = categories[0];
      cat = firstCat;
    }

    const firstCat = categories[0];
    const secondCat = categories[1];
    const thirdCat = categories[2];
    const fourthCat = categories[3];

    switch (settings) {
      case 'dogs/6x6':
        cat = secondCat;
        break;
      case 'null/6x6':
        cat = secondCat;
        break;
      case 'birds/4x4':
        cat = thirdCat;
        break;
      case 'birds/6x6':
        cat = fourthCat;
        break;
      default:
        cat = firstCat;
        break;
    }

    const images = cat.images.map((name) => `${name}`);
    // const images = cat.images.map((name) => `${cat.category}/${name}`);

    this.game.newGame(images, this.timer);
  }

  checkSettings() {
    const retrievedSettings = localStorage.getItem('settings');
    const settings = JSON.parse(retrievedSettings);

    this.cardsType = settings.cardsType;
    this.difficulty = settings.difficulty;
  }
}
