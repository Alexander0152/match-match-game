import ImageCategoryModel from '../businessLayer/image-category-model';
import Game from './game';
import Timer from './timer';

export default class GamePage {
  private readonly game: Game;

  private readonly timerContainer: Element;

  private timer: Timer;

  constructor(private readonly rootElement: Element) {
    this.game = new Game();

    this.timerContainer = document.querySelector('#content');
    this.timer = new Timer(this.timerContainer);
    this.timer.startWathingTimer();
    this.rootElement.appendChild(this.game.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();

    const cat = categories[0];
    const images = cat.images.map((name) => `${name}`);
    // const images = cat.images.map((name) => `${cat.category}/${name}`);

    this.game.newGame(images, this.timer);
  }
}
