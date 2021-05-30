import BaseCardComponent from './base-card-component';

const FLIP_CLASS = 'flipped';
export default class Card extends BaseCardComponent {
  isFlipped = false;

  difficulty: string;

  difficultyStyle: string;

  constructor(readonly image: string, difficulty: string) {
    super('div', ['card-container']);
    this.difficulty = difficulty;

    const images = Card.importAllImages(
      require.context(`../assets/images/game_images`, false, /\.(png|jpe?g|svg)$/),
    );
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

  checkDifficulty() {
    if (this.difficulty === 'hard') {
      this.difficultyStyle = 'card-difficult';
    }
  }
}
