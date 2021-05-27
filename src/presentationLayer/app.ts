import ImageCategoryModel from '../businessLayer/image-category-model';
import Game from './game';

export default class App {
  private readonly game: Game;

  constructor(private readonly rootElement: Element) {
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();

    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);

    this.game.newGame(images);
  }
}
