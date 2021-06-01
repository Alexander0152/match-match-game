import BaseCardComponent from './base-card-component';

const FLIP_CLASS = 'flipped';
export default class Card extends BaseCardComponent {
  isFlipped = false;

  difficulty: string;

  difficultyStyle: string;

  constructor(readonly image: string, cardType: string, difficulty: string) {
    super('div', ['card-container']);
    this.difficulty = difficulty;
    this.checkSettings();

    let images;
    if (cardType !== null && cardType !== 'dogs') {
      images = Card.importAllImages(
        require.context(`../assets/images/game_images1`, false, /\.(png|jpe?g|svg)$/),
      );
    } else {
      images = Card.importAllImages(
        require.context(`../assets/images/game_images`, false, /\.(png|jpe?g|svg)$/),
      );
    }

    const path = images[+image];

    this.element.innerHTML = `
    <div class="card ${this.difficultyStyle}">
      <div class="card__front" style="background-image: url('${path}')"></div>
      <div class="card__back"></div>
    </div>
    `;
  }

  static importAllImages(r: __WebpackModuleApi.RequireContext) {
    return r.keys().map(r);
  }

  flipToBack() {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront() {
    this.isFlipped = false;
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }

  checkSettings() {
    if (this.difficulty === '6x6') {
      this.difficultyStyle = 'card-difficult';
    }
  }
}
